#!/usr/bin/env python3
"""
Fix CD023 by re-extracting the function completely from exercises.js
"""

import re

EXERCISES_JS = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\js\exercises.js"
WIDGET_FILE = r"D:\ClaudeOutput\CD023-widget.html"

def extract_function(js_content, function_name):
    """Extract a complete function from JavaScript content"""
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

    return js_content[start:end]

# Read exercises.js
with open(EXERCISES_JS, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extract CD023 and CD023Play
cd023_func = extract_function(js_content, 'CD023')
cd023play_func = extract_function(js_content, 'CD023Play')

print("Extracted CD023 function length:", len(cd023_func) if cd023_func else 0)
print("Extracted CD023Play function length:", len(cd023play_func) if cd023play_func else 0)

# Read widget file
with open(WIDGET_FILE, 'r', encoding='utf-8') as f:
    widget_content = f.read()

# Find and replace CD023 function
old_cd023_pattern = r'function CD023\(\).*?^}'
new_widget = re.sub(old_cd023_pattern, cd023_func, widget_content, flags=re.MULTILINE | re.DOTALL)

# Find and replace CD023Play function
old_cd023play_pattern = r'function CD023Play\(\).*?^}'
new_widget = re.sub(old_cd023play_pattern, cd023play_func, new_widget, flags=re.MULTILINE | re.DOTALL)

# Write back
with open(WIDGET_FILE, 'w', encoding='utf-8') as f:
    f.write(new_widget)

print("CD023 widget functions updated!")
