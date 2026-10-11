#!/usr/bin/env python3
"""
generate_all_quizzes.py
Generates comprehensive, industry-standard module quizzes for all modules across Cherry Edu:
- Home Brewer (Modul H-1 to H-10) + lesson realignment (H-3, H-5, H-6, H-7, H-8, H-9)
- Roaster Specialist (Modul R-1 to R-5)
- Q Grader (Modul Q-1 to Q-5)
- Post-Harvest (Modul P-1 to P-5)
- Coffee Business (Modul BIZ-1 to BIZ-5)
- Replaces generic boilerplate questions in Barista (Modul B-1 to B-10)
- Applies balanced answer key randomization (never all A, strictly distributed among A, B, C, D) across all paths and seedData.ts.
"""

import re
import json

def rotate_question_answers(q, target_idx):
    """
    Given a Question dict-like structure or raw data,
    places the correct answer at target_idx (0=A, 1=B, 2=C, 3=D)
    and places the 3 incorrect answers in the other slots.
    """
    answers = q["answers"]
    correct_ans = next(a for a in answers if a.get("is_correct") is True)
    wrong_answers = [a for a in answers if a.get("is_correct") is not True]
    
    new_answers = [None] * len(answers)
    new_answers[target_idx] = correct_ans
    
    w_idx = 0
    for i in range(len(answers)):
        if i != target_idx:
            new_answers[i] = wrong_answers[w_idx]
            w_idx += 1
            
    # update order_index and clean id if needed
    for idx, ans in enumerate(new_answers):
        ans["order_index"] = idx + 1
        
    q["answers"] = new_answers
    return q

print("Script framework ready.")
