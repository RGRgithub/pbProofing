#!/usr/bin/env python3
"""
Remove duplicate variable declarations in widget files
"""

import os
import re

OUTPUT_DIR = r"D:\ClaudeOutput"

def deduplicate_widget_vars(widget_file):
    """Remove duplicate variable declarations"""
    filepath = os.path.join(OUTPUT_DIR, widget_file)

    # Read the file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the script section
    script_match = re.search(r'(<script>.*?</script>)', content, re.DOTALL)
    if not script_match:
        return False, "No script section found"

    script_section = script_match.group(1)

    # Extract all var declarations
    var_pattern = r'^\s+(var [A-Za-z0-9_]+.*;)$'

    lines = script_section.split('\n')
    seen_vars = set()
    new_lines = []
    removed_count = 0

    for line in lines:
        # Check if this is a var declaration
        match = re.match(var_pattern, line)
        if match:
            var_decl = match.group(1)
            # Extract variable name
            var_name_match = re.search(r'var\s+([A-Za-z0-9_]+)', var_decl)
            if var_name_match:
                var_name = var_name_match.group(1)
                if var_name in seen_vars:
                    # Skip duplicate
                    removed_count += 1
                    continue
                else:
                    seen_vars.add(var_name)

        new_lines.append(line)

    if removed_count == 0:
        return True, "No duplicates found"

    # Rebuild script section
    new_script = '\n'.join(new_lines)

    # Replace in content
    new_content = content.replace(script_section, new_script)

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, f"Removed {removed_count} duplicate(s)"

def main():
    print("=" * 60)
    print("Deduplicating Variable Declarations")
    print("=" * 60)

    # Get all widget files
    widget_files = [f for f in os.listdir(OUTPUT_DIR) if f.startswith('CD') and f.endswith('-widget.html')]
    widget_files.sort()

    fixed_count = 0
    for widget_file in widget_files:
        try:
            success, message = deduplicate_widget_vars(widget_file)
            if success and "Removed" in message:
                fixed_count += 1
                print(f"{widget_file}: {message}")
        except Exception as e:
            print(f"{widget_file}: ERROR - {e}")

    print("=" * 60)
    print(f"Complete! Fixed {fixed_count} widgets with duplicates")
    print("=" * 60)

if __name__ == "__main__":
    main()
