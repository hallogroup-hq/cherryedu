# -*- coding: utf-8 -*-
"""
Full curriculum update script for Cherry Edu.
"""
import os
import re
import json

def rotate_options(correct_text, wrong_1, wrong_2, wrong_3, target_idx, q_id):
    """
    Returns 4 Answer dicts with correct answer placed at target_idx (0, 1, 2, 3)
    and answer IDs like 'ans-{q_id}-a', 'ans-{q_id}-b', etc.
    """
    letters = ['a', 'b', 'c', 'd']
    items = [
        {"text": wrong_1, "correct": False},
        {"text": wrong_2, "correct": False},
        {"text": wrong_3, "correct": False},
    ]
    
    answers = []
    w_ptr = 0
    for i in range(4):
        letter = letters[i]
        ans_id = f"ans-{q_id}-{letter}"
        if i == target_idx:
            answers.append({
                "id": ans_id,
                "question_id": q_id,
                "answer_text": correct_text,
                "is_correct": True,
                "order_index": i + 1
            })
        else:
            answers.append({
                "id": ans_id,
                "question_id": q_id,
                "answer_text": items[w_ptr]["text"],
                "is_correct": False,
                "order_index": i + 1
            })
            w_ptr += 1
            
    return answers

def format_ts_answers(answers):
    lines = []
    for a in answers:
        qid_field = f", question_id: '{a['question_id']}'" if 'question_id' in a else ""
        order_field = f", order_index: {a['order_index']}" if 'order_index' in a else ""
        bool_val = 'true' if a['is_correct'] else 'false'
        # escape single quotes in text
        escaped_text = a['answer_text'].replace("'", "\\'")
        lines.append(f"      {{ id: '{a['id']}'{qid_field}, answer_text: '{escaped_text}', is_correct: {bool_val}{order_field} }},")
    return "\n".join(lines)

def format_ts_question(q):
    escaped_qtext = q['question_text'].replace("'", "\\'")
    escaped_exp = q['explanation'].replace("'", "\\'")
    pts_field = f"    points: {q['points']},\n" if 'points' in q else ""
    return f"""  {{
    id: '{q['id']}',
    quiz_id: '{q['quiz_id']}',
    question_text: '{escaped_qtext}',
    question_type: 'multiple_choice',
{pts_field}    order_index: {q['order_index']},
    explanation: '{escaped_exp}',
    answers: [
{format_ts_answers(q['answers'])}
    ],
  }},"""

print("Base helper ready.")
