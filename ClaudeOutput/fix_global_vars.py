#!/usr/bin/env python3
"""
Fix missing global variable declarations in widget files
by extracting them from exercises.js
"""

import os
import re

# Paths
EXERCISES_JS = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\js\exercises.js"
OUTPUT_DIR = r"D:\ClaudeOutput"

def read_file(filepath):
    """Read file content"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return None

def extract_global_vars_for_template(js_content, template_id):
    """Extract global variable declarations for a specific template"""
    # Look for lines like: var CD023ClickArray = []; or var CD023ClickArray;
    pattern = rf'^var {template_id}[A-Za-z0-9_]+.*;$'

    vars_found = []
    for line in js_content.split('\n'):
        line_stripped = line.strip()
        if re.match(pattern, line_stripped):
            vars_found.append(line_stripped)

    return vars_found

def fix_widget_globals(widget_file, js_content):
    """Add missing global variables to a widget file"""
    template_id = widget_file.replace('-widget.html', '')
    filepath = os.path.join(OUTPUT_DIR, widget_file)

    # Read the widget file
    widget_content = read_file(filepath)
    if not widget_content:
        return False, "Could not read widget file"

    # Extract global vars for this template
    global_vars = extract_global_vars_for_template(js_content, template_id)

    if not global_vars:
        return True, "No global variables needed"

    # Check if variables already exist
    # Extract just the variable name from declarations like "var CD023ClickArray = [];" or "var CD005IconSize;"
    var_names = []
    for var in global_vars:
        # Extract variable name: var NAME = ... or var NAME;
        match = re.search(r'var\s+([A-Za-z0-9_]+)', var)
        if match:
            var_names.append(match.group(1))

    vars_exist = all(f'var {name}' in widget_content for name in var_names)
    if vars_exist:
        return True, "Global variables already present"

    # Find where to insert (after var clicker = 'click';)
    insert_pattern = r"(var clicker = 'click';)"

    # Create the insertion text
    vars_text = '\n        ' + '\n        '.join(global_vars)
    replacement = r"\1" + vars_text

    new_content = re.sub(insert_pattern, replacement, widget_content)

    if new_content == widget_content:
        return False, "Could not find insertion point"

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, f"Added {len(global_vars)} global variable(s)"

def main():
    print("=" * 60)
    print("Adding Missing Global Variables to Widgets")
    print("=" * 60)

    # Read exercises.js
    js_content = read_file(EXERCISES_JS)
    if not js_content:
        print("ERROR: Could not read exercises.js")
        return

    # Get all widget files
    widget_files = [f for f in os.listdir(OUTPUT_DIR) if f.startswith('CD') and f.endswith('-widget.html')]
    widget_files.sort()

    success_count = 0
    for widget_file in widget_files:
        try:
            success, message = fix_widget_globals(widget_file, js_content)
            if success:
                success_count += 1
                if "Added" in message:
                    print(f"{widget_file}: {message}")
        except Exception as e:
            print(f"{widget_file}: ERROR - {e}")

    print("=" * 60)
    print(f"Complete! Processed {success_count}/{len(widget_files)} widgets")
    print("=" * 60)

if __name__ == "__main__":
    main()
