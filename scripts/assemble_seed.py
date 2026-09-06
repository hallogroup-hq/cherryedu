import os
import sys
import json
from build_rich_seed import get_foundation_lessons, get_other_lessons, get_quizzes_and_questions

def format_ts_string(s):
    # Format multiline markdown as template literal, escaping backticks and ${
    escaped = s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return f"`\n{escaped}\n    `"

def format_lesson(les):
    lines = []
    lines.append("  {")
    lines.append(f"    id: {json.dumps(les['id'])},")
    lines.append(f"    module_id: {json.dumps(les['module_id'])},")
    lines.append(f"    title: {json.dumps(les['title'])},")
    lines.append(f"    content: {format_ts_string(les['content'].strip())},")
    lines.append(f"    content_type: 'text',")
    lines.append(f"    duration_minutes: {les['duration_minutes']},")
    lines.append(f"    order_index: {les['order_index']},")
    lines.append(f"    is_free: {'true' if les['is_free'] else 'false'},")
    lines.append(f"    is_published: {'true' if les['is_published'] else 'false'},")
    lines.append(f"    created_at: {json.dumps(les['created_at'])},")
    if 'summary' in les and les['summary']:
        lines.append(f"    summary: {json.dumps(les['summary'])},")
    if 'key_takeaways' in les and les['key_takeaways']:
        takeaways_json = json.dumps(les['key_takeaways'], indent=6, ensure_ascii=False)
        lines.append(f"    key_takeaways: {takeaways_json},")
    if 'brew_recipe' in les and les['brew_recipe']:
        recipe_json = json.dumps(les['brew_recipe'], indent=6, ensure_ascii=False)
        lines.append(f"    brew_recipe: {recipe_json},")
    lines.append("  },")
    return "\n".join(lines)

def format_quiz(q):
    lines = []
    lines.append("  {")
    lines.append(f"    id: {json.dumps(q['id'])},")
    lines.append(f"    module_id: {'null' if q['module_id'] is None else json.dumps(q['module_id'])},")
    lines.append(f"    learning_path_id: {'null' if q['learning_path_id'] is None else json.dumps(q['learning_path_id'])},")
    lines.append(f"    quiz_scope: {json.dumps(q['quiz_scope'])},")
    lines.append(f"    title: {json.dumps(q['title'])},")
    lines.append(f"    passing_score: {q['passing_score']},")
    lines.append(f"    time_limit_minutes: {q['time_limit_minutes']},")
    lines.append(f"    max_attempts: {q['max_attempts']},")
    lines.append(f"    created_at: {json.dumps(q['created_at'])},")
    lines.append("  },")
    return "\n".join(lines)

def format_question(qn):
    lines = []
    lines.append("  {")
    lines.append(f"    id: {json.dumps(qn['id'])},")
    lines.append(f"    quiz_id: {json.dumps(qn['quiz_id'])},")
    lines.append(f"    question_text: {json.dumps(qn['question_text'])},")
    lines.append(f"    question_type: {json.dumps(qn['question_type'])},")
    lines.append(f"    order_index: {qn['order_index']},")
    if 'explanation' in qn and qn['explanation']:
        lines.append(f"    explanation: {json.dumps(qn['explanation'])},")
    
    ans_lines = []
    ans_lines.append("    answers: [")
    for ans in qn['answers']:
        ans_lines.append(f"      {{ id: {json.dumps(ans['id'])}, question_id: {json.dumps(ans['question_id'])}, answer_text: {json.dumps(ans['answer_text'])}, is_correct: {'true' if ans['is_correct'] else 'false'}, order_index: {ans['order_index']} }},")
    ans_lines.append("    ],")
    lines.append("\n".join(ans_lines))
    lines.append("  },")
    return "\n".join(lines)

def main():
    seed_path = 'lib/data/seedData.ts'
    with open(seed_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split before '// 5. LESSONS'
    split_token_1 = '// 5. LESSONS'
    split_token_2 = '// 8. INITIAL ENROLLMENTS'

    if split_token_1 not in content or split_token_2 not in content:
        print("Error: Could not find split tokens in seedData.ts")
        sys.exit(1)

    preamble = content.split(split_token_1)[0]
    postamble = split_token_2 + content.split(split_token_2)[1]

    # Gather data
    foundation_lessons = get_foundation_lessons()
    other_lessons = get_other_lessons()
    all_lessons = foundation_lessons + other_lessons
    quizzes, questions = get_quizzes_and_questions()

    middle_parts = []
    middle_parts.append("// 5. LESSONS")
    middle_parts.append("export const SEED_LESSONS: Lesson[] = [")
    for les in all_lessons:
        middle_parts.append(format_lesson(les))
    middle_parts.append("];\n")

    middle_parts.append("// 6. QUIZZES")
    middle_parts.append("export const SEED_QUIZZES: Quiz[] = [")
    for q in quizzes:
        middle_parts.append(format_quiz(q))
    middle_parts.append("];\n")

    middle_parts.append("// 7. QUESTIONS & ANSWERS")
    middle_parts.append("export const SEED_QUESTIONS: Question[] = [")
    for qn in questions:
        middle_parts.append(format_question(qn))
    middle_parts.append("];\n")

    new_full_content = preamble + "\n".join(middle_parts) + "\n" + postamble

    with open(seed_path, 'w', encoding='utf-8') as f:
        f.write(new_full_content)

    print(f"Successfully assembled {seed_path}!")
    print(f"- Total lessons: {len(all_lessons)} (Foundation: {len(foundation_lessons)}, Other: {len(other_lessons)})")
    print(f"- Total quizzes: {len(quizzes)}")
    print(f"- Total questions: {len(questions)}")

if __name__ == '__main__':
    main()
