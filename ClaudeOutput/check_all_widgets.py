#!/usr/bin/env python3
"""
Check all widgets for JavaScript syntax errors and structural issues
"""

import os
import re

OUTPUT_DIR = r"D:\ClaudeOutput"

def check_widget_syntax(widget_file):
    """Check a widget for common syntax issues"""
    filepath = os.path.join(OUTPUT_DIR, widget_file)
    template_id = widget_file.replace('-widget.html', '')

    issues = []

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract script section
        script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
        if not script_match:
            return ["No script section found"]

        script = script_match.group(1)
        lines = script.split('\n')

        # Check 1: Find the main function
        main_func_pattern = rf'function {template_id}\(\)'
        if not re.search(main_func_pattern, script):
            issues.append(f"Missing {template_id}() function")

        # Check 2: Count braces in script
        open_braces = script.count('{')
        close_braces = script.count('}')
        if open_braces != close_braces:
            issues.append(f"Brace mismatch: {open_braces} open, {close_braces} close")

        # Check 3: Look for orphaned else statements
        for i, line in enumerate(lines, 1):
            stripped = line.strip()
            # Check for } else { pattern that might be malformed
            if stripped.startswith('} else {') or stripped == 'else {':
                # Look back to see if there's proper context
                prev_lines = '\n'.join(lines[max(0, i-5):i])
                if 'initPage()' in prev_lines:
                    issues.append(f"Line {i}: Orphaned 'else' after initPage() - likely duplicate code")

        # Check 4: Look for duplicate function definitions
        func_pattern = rf'function {template_id}\(\)'
        func_matches = list(re.finditer(func_pattern, script))
        if len(func_matches) > 1:
            issues.append(f"Duplicate {template_id}() function definitions: {len(func_matches)} found")

        play_pattern = rf'function {template_id}Play\(\)'
        play_matches = list(re.finditer(play_pattern, script))
        if len(play_matches) > 1:
            issues.append(f"Duplicate {template_id}Play() function definitions: {len(play_matches)} found")

        # Check 5: Look for weird indentation (sign of corruption)
        for i, line in enumerate(lines, 1):
            if re.match(r'^\s{16,}function', line):  # More than 12 spaces before function
                issues.append(f"Line {i}: Excessive indentation on function declaration")
                break

        return issues if issues else None

    except Exception as e:
        return [f"Error reading file: {e}"]

def main():
    print("=" * 70)
    print("Checking All Widgets for Syntax Errors")
    print("=" * 70)

    # Get all widget files
    widget_files = [f for f in os.listdir(OUTPUT_DIR)
                   if f.startswith('CD') and f.endswith('-widget.html')]
    widget_files.sort()

    widgets_with_issues = []
    clean_widgets = []

    for widget_file in widget_files:
        issues = check_widget_syntax(widget_file)
        if issues:
            widgets_with_issues.append((widget_file, issues))
            print(f"\n{widget_file}:")
            for issue in issues:
                print(f"  - {issue}")
        else:
            clean_widgets.append(widget_file)

    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"Clean widgets: {len(clean_widgets)}/46")
    print(f"Widgets with issues: {len(widgets_with_issues)}/46")

    if widgets_with_issues:
        print("\nWidgets needing regeneration:")
        for widget_file, _ in widgets_with_issues:
            print(f"  - {widget_file}")

    print("=" * 70)

if __name__ == "__main__":
    main()
