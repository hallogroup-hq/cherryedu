# -*- coding: utf-8 -*-
"""
update_remaining_paths.py
Updates:
1. baristaData.ts (30 real questions with randomized keys)
2. roasterData.ts (quizzes R-1 to R-5 + 15 questions + rotated final)
3. qGraderData.ts (quizzes Q-1 to Q-5 + 15 questions + rotated final)
4. postHarvestData.ts (quizzes P-1 to P-5 + 15 questions + rotated final)
5. coffeeBusinessData.ts (quizzes BIZ-1 to BIZ-5 + 15 questions + rotated final)
6. qProcessorData.ts (rotates existing 34 questions)
7. seedData.ts (rotates 42 direct questions)
"""
import sys
import os
import re

sys.path.insert(0, os.path.dirname(__file__))

from curriculum_helpers import format_ts_question, rotate_options
from data_barista_quizzes import get_barista_quizzes, get_barista_questions
from data_roaster_quizzes import get_roaster_module_quizzes, get_roaster_module_questions
from data_q_grader_quizzes import get_q_grader_module_quizzes, get_q_grader_module_questions
from data_post_harvest_quizzes import get_post_harvest_module_quizzes, get_post_harvest_module_questions
from data_coffee_business_quizzes import get_coffee_business_module_quizzes, get_coffee_business_module_questions

def rotate_raw_question_blocks(content, start_marker, end_marker=None):
    """
    Finds each question object between start_marker and end_marker,
    and rotates its 4 answers across target indices [1, 2, 0, 3, 2, 0, 3, 1, 0, 2, 1, 3...].
    """
    start_pos = content.find(start_marker)
    if start_pos == -1:
        return content
    
    end_pos = content.find(end_marker, start_pos) if end_marker else len(content)
    if end_pos == -1:
        end_pos = len(content)
        
    sub = content[start_pos:end_pos]
    pattern = [1, 2, 0, 3, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0]
    
    # We find all question blocks: { id: 'q-...', ... answers: [ ... ] }
    # To be very safe, let's match answers: [ ... ] and rotate it
    ans_regex = re.compile(r'(answers:\s*\[)([\s\S]*?)(\])', re.MULTILINE)
    
    q_counter = 0
    def replacer(m):
        nonlocal q_counter
        prefix = m.group(1)
        ans_body = m.group(2)
        suffix = m.group(3)
        
        # parse each item inside { ... }
        items = re.findall(r'\{[^{}]*\}', ans_body)
        if len(items) != 4:
            q_counter += 1
            return m.group(0)
            
        correct_indices = [i for i, it in enumerate(items) if 'is_correct: true' in it]
        if not correct_indices:
            q_counter += 1
            return m.group(0)
            
        correct_idx = correct_indices[0]
        correct_item = items[correct_idx]
        wrong_items = [it for i, it in enumerate(items) if i != correct_idx]
        
        target_idx = pattern[q_counter % len(pattern)]
        q_counter += 1
        
        new_items = [None] * 4
        new_items[target_idx] = correct_item
        w_ptr = 0
        for i in range(4):
            if i != target_idx:
                new_items[i] = wrong_items[w_ptr]
                w_ptr += 1
                
        # update order_index
        for i in range(4):
            new_items[i] = re.sub(r'order_index:\s*\d+', f'order_index: {i+1}', new_items[i])
            
        new_ans_body = '\n' + '\n'.join('      ' + it + ',' for it in new_items) + '\n    '
        return prefix + new_ans_body + suffix

    new_sub = ans_regex.sub(replacer, sub)
    return content[:start_pos] + new_sub + content[end_pos:]

# 1. UPDATE BARISTA DATA
def update_barista():
    print("Updating baristaData.ts...")
    with open('lib/data/paths/baristaData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
        
    b_quizzes = get_barista_quizzes()
    b_questions = get_barista_questions()
    
    # Format quizzes
    quiz_lines = ["export const BARISTA_QUIZZES: Quiz[] = ["]
    for q in b_quizzes:
        mod_line = f"    module_id: '{q['module_id']}',\n" if q['module_id'] else "    module_id: null,\n"
        desc_val = q['description'].replace("'", "\\'") if 'description' in q else None
        desc_line = f"    description: '{desc_val}',\n" if desc_val else ""
        quiz_lines.append(f"""  {{
    id: '{q['id']}',
{mod_line}    learning_path_id: '{q['learning_path_id']}',
    quiz_scope: '{q['quiz_scope']}',
    title: '{q['title'].replace("'", "\\'")}',
{desc_line}    passing_score: {q['passing_score']},
    time_limit_minutes: {q['time_limit_minutes']},
    max_attempts: {q['max_attempts']},
    created_at: '{q['created_at']}',
  }},""")
    quiz_lines.append("];\n")
    
    # Format questions
    q_lines = ["export const BARISTA_QUESTIONS: Question[] = ["]
    for q in b_questions:
        q_lines.append(format_ts_question(q))
    q_lines.append("];\n")
    
    # Replace from export const BARISTA_QUIZZES
    q_start = content.find('export const BARISTA_QUIZZES')
    prefix = content[:q_start]
    
    new_content = prefix + '\n'.join(quiz_lines) + '\n' + '\n'.join(q_lines)
    with open('lib/data/paths/baristaData.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("baristaData.ts updated.")

# 2. UPDATE PATH FUNCTION (ROASTER, Q_GRADER, POST_HARVEST, COFFEE_BUSINESS)
def update_path_with_module_quizzes(filename, get_quizzes_fn, get_questions_fn, prefix_name):
    print(f"Updating {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Rotate existing final questions first
    content = rotate_raw_question_blocks(content, f"export const {prefix_name}_QUESTIONS")
    
    # Extract rotated final exam questions
    q_idx = content.find(f"export const {prefix_name}_QUESTIONS: Question[] = [")
    q_body = content[q_idx + len(f"export const {prefix_name}_QUESTIONS: Question[] = [") : content.rfind('];')]
    
    # New module quizzes
    new_quizzes = get_quizzes_fn()
    quiz_lines = [f"export const {prefix_name}_QUIZZES: Quiz[] = ["]
    for q in new_quizzes:
        mod_line = f"    module_id: '{q['module_id']}',\n" if q['module_id'] else "    module_id: null,\n"
        desc_val = q['description'].replace("'", "\\'") if 'description' in q else None
        desc_line = f"    description: '{desc_val}',\n" if desc_val else ""
        quiz_lines.append(f"""  {{
    id: '{q['id']}',
{mod_line}    learning_path_id: '{q['learning_path_id']}',
    quiz_scope: '{q['quiz_scope']}',
    title: '{q['title'].replace("'", "\\'")}',
{desc_line}    passing_score: {q['passing_score']},
    time_limit_minutes: {q['time_limit_minutes']},
    max_attempts: {q['max_attempts']},
    created_at: '{q['created_at']}',
  }},""")
    quiz_lines.append("];\n")
    
    # New module questions
    new_questions = get_questions_fn()
    q_lines = [f"export const {prefix_name}_QUESTIONS: Question[] = ["]
    for q in new_questions:
        q_lines.append(format_ts_question(q))
    q_lines.append(q_body.strip())
    q_lines.append("];\n")
    
    # Replace from export const PREFIX_QUIZZES
    q_start = content.find(f"export const {prefix_name}_QUIZZES")
    prefix = content[:q_start]
    
    new_content = prefix + '\n'.join(quiz_lines) + '\n' + '\n'.join(q_lines)
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"{filename} updated.")

# 3. ROTATE Q PROCESSOR QUESTIONS
def rotate_q_processor():
    print("Rotating qProcessorData.ts questions...")
    with open('lib/data/paths/qProcessorData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = rotate_raw_question_blocks(content, "export const Q_PROCESSOR_QUESTIONS")
    with open('lib/data/paths/qProcessorData.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("qProcessorData.ts rotated.")

# 4. ROTATE SEED DATA DIRECT QUESTIONS
def rotate_seed_data():
    print("Rotating seedData.ts direct questions...")
    with open('lib/data/seedData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = rotate_raw_question_blocks(content, "export const SEED_QUESTIONS: Question[] = [", "...BARISTA_QUESTIONS")
    with open('lib/data/seedData.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("seedData.ts direct questions rotated.")

if __name__ == '__main__':
    update_barista()
    update_path_with_module_quizzes('lib/data/paths/roasterData.ts', get_roaster_module_quizzes, get_roaster_module_questions, 'ROASTER')
    update_path_with_module_quizzes('lib/data/paths/qGraderData.ts', get_q_grader_module_quizzes, get_q_grader_module_questions, 'Q_GRADER')
    update_path_with_module_quizzes('lib/data/paths/postHarvestData.ts', get_post_harvest_module_quizzes, get_post_harvest_module_questions, 'POST_HARVEST')
    update_path_with_module_quizzes('lib/data/paths/coffeeBusinessData.ts', get_coffee_business_module_quizzes, get_coffee_business_module_questions, 'COFFEE_BUSINESS')
    rotate_q_processor()
    rotate_seed_data()
    print("ALL PATHS UPDATED SUCCESSFULLY.")
