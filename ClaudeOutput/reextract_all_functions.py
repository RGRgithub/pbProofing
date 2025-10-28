#!/usr/bin/env python3
"""
Re-extract all template functions from exercises.js to fix incomplete extractions
"""

import os
import re

EXERCISES_JS = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\js\exercises.js"
OUTPUT_DIR = r"D:\ClaudeOutput"

def extract_function(js_content, function_name):
    """Extract a complete function from JavaScript content using brace counting"""
    # Find the function start
    pattern = rf'function {function_name}\(\)\s*\{{'
    match = re.search(pattern, js_content)

    if not match:
        return None

    start = match.start()

    # Count braces to find the end
    brace_count = 0
    in_function = False
    end = start

    for i in range(start, len(js_content)):
        char = js_content[i]
        if char == '{':
            brace_count += 1
            in_function = True
        elif char == '}':
            brace_count -= 1
            if in_function and brace_count == 0:
                end = i + 1
                break

    function_code = js_content[start:end]

    # Verify we got a complete function
    if function_code.count('{') != function_code.count('}'):
        print(f"  WARNING: Brace mismatch in {function_name}")
        return None

    return function_code

def fix_widget_functions(widget_file, js_content):
    """Re-extract and replace functions in a widget"""
    template_id = widget_file.replace('-widget.html', '')
    filepath = os.path.join(OUTPUT_DIR, widget_file)

    # Read widget
    with open(filepath, 'r', encoding='utf-8') as f:
        widget_content = f.read()

    # Extract functions from exercises.js
    main_func = extract_function(js_content, template_id)
    play_func = extract_function(js_content, f'{template_id}Play')

    if not main_func:
        return False, f"Could not extract {template_id}() from exercises.js"

    changes = 0

    # Replace main function
    old_func_pattern = rf'function {template_id}\(\).*?^        }}'
    if re.search(old_func_pattern, widget_content, flags=re.MULTILINE | re.DOTALL):
        # Need to indent the function (8 spaces)
        indented_main = '\n'.join('        ' + line if line.strip() else ''
                                   for line in main_func.split('\n'))
        widget_content = re.sub(old_func_pattern, indented_main.rstrip(),
                               widget_content, flags=re.MULTILINE | re.DOTALL)
        changes += 1

    # Replace play function if it exists
    if play_func:
        old_play_pattern = rf'function {template_id}Play\(\).*?^        }}'
        if re.search(old_play_pattern, widget_content, flags=re.MULTILINE | re.DOTALL):
            indented_play = '\n'.join('        ' + line if line.strip() else ''
                                      for line in play_func.split('\n'))
            widget_content = re.sub(old_play_pattern, indented_play.rstrip(),
                                   widget_content, flags=re.MULTILINE | re.DOTALL)
            changes += 1

    if changes == 0:
        return False, "No functions replaced"

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(widget_content)

    play_msg = " + Play" if play_func else ""
    return True, f"Updated {template_id}(){play_msg}"

def main():
    print("=" * 60)
    print("Re-extracting All Template Functions")
    print("=" * 60)

    # Read exercises.js
    with open(EXERCISES_JS, 'r', encoding='utf-8') as f:
        js_content = f.read()

    # Get all widget files
    widget_files = [f for f in os.listdir(OUTPUT_DIR)
                   if f.startswith('CD') and f.endswith('-widget.html')]
    widget_files.sort()

    fixed_count = 0
    for widget_file in widget_files:
        try:
            success, message = fix_widget_functions(widget_file, js_content)
            if success:
                fixed_count += 1
                print(f"{widget_file}: {message}")
            else:
                print(f"{widget_file}: {message}")
        except Exception as e:
            print(f"{widget_file}: ERROR - {e}")

    print("=" * 60)
    print(f"Complete! Updated {fixed_count}/{len(widget_files)} widgets")
    print("=" * 60)

if __name__ == "__main__":
    main()
