#!/usr/bin/env python3
"""
Fix icon paths in all widget files to use proper file:/// URLs
"""

import os
import re

# Path to the reference site icons
REFERENCE_ICONS_PATH = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\img\icons"
OUTPUT_DIR = r"D:\ClaudeOutput"

def fix_widget_icons(widget_file):
    """Fix icon paths in a single widget file"""
    filepath = os.path.join(OUTPUT_DIR, widget_file)

    # Read the file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all icon class definitions in the <style> section
    # Pattern: .icName { background-image: url('old-path'); }

    def replace_icon_url(match):
        icon_class = match.group(1)
        # Create proper file:/// URL with forward slashes
        file_url = f"file:///{REFERENCE_ICONS_PATH}/{icon_class}.svg".replace('\\', '/')
        return f".{icon_class} {{\n            background-image: url('{file_url}');\n        }}"

    # Replace all icon definitions
    pattern = r'\.([ic][A-Za-z0-9_]+)\s*\{[^}]*background-image:\s*url\([^)]+\);[^}]*\}'
    content = re.sub(pattern, replace_icon_url, content)

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return True

def main():
    print("=" * 60)
    print("Fixing Icon Paths in All Widgets")
    print("=" * 60)

    # Get all widget files
    widget_files = [f for f in os.listdir(OUTPUT_DIR) if f.startswith('CD') and f.endswith('-widget.html')]
    widget_files.sort()

    fixed_count = 0
    for widget_file in widget_files:
        try:
            if fix_widget_icons(widget_file):
                fixed_count += 1
                print(f"Fixed {widget_file}")
        except Exception as e:
            print(f"Error fixing {widget_file}: {e}")

    print("=" * 60)
    print(f"Complete! Fixed {fixed_count}/{len(widget_files)} widgets")
    print("=" * 60)

if __name__ == "__main__":
    main()
