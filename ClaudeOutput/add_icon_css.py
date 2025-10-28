#!/usr/bin/env python3
"""
Add icon CSS classes to all widget files by extracting icon names from JSON data
"""

import os
import re
import json

# Paths
REFERENCE_ICONS_PATH = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\img\icons"
OUTPUT_DIR = r"D:\ClaudeOutput"

def extract_icons_from_json(json_str):
    """Extract all icon class names from JSON data"""
    icons = set()
    # Look for "icon": "icName" patterns
    pattern = r'"icon"\s*:\s*"(ic[A-Za-z0-9_]+)"'
    matches = re.findall(pattern, json_str)
    icons.update(matches)
    return sorted(icons)

def generate_icon_css(icons):
    """Generate CSS for icon classes"""
    if not icons:
        return ""

    css_lines = []
    for icon in icons:
        file_url = f"file:///{REFERENCE_ICONS_PATH}/{icon}.svg".replace('\\', '/')
        css_lines.append(f"        .{icon} {{")
        css_lines.append(f"            background-image: url('{file_url}');")
        css_lines.append(f"        }}")
        css_lines.append("")

    return "\n".join(css_lines)

def add_icons_to_widget(widget_file):
    """Add icon CSS to a widget file"""
    filepath = os.path.join(OUTPUT_DIR, widget_file)

    # Read the file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract JSON data from the file
    json_match = re.search(r'var exerciseData = (\{.*?\n\s+\});', content, re.DOTALL)
    if not json_match:
        return False, "No JSON data found"

    json_str = json_match.group(1)

    # Extract icon names
    icons = extract_icons_from_json(json_str)
    if not icons:
        return True, "No icons needed"

    # Generate icon CSS
    icon_css = generate_icon_css(icons)

    # Find the end of the .heartWord style and insert icon CSS there
    # Look for the </style> tag and insert before it
    style_end_pattern = r'(\s+)(</style>)'
    replacement = f"\\1{icon_css}\\1\\2"

    # Check if THESE SPECIFIC icons already exist in the file
    icons_exist = all(f'.{icon}' in content for icon in icons)
    if icons_exist:
        return True, "Icons already present"

    new_content = re.sub(style_end_pattern, replacement, content)

    if new_content == content:
        return False, "Could not find </style> tag"

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, f"Added {len(icons)} icon(s): {', '.join(icons)}"

def main():
    print("=" * 60)
    print("Adding Icon CSS to All Widgets")
    print("=" * 60)

    # Get all widget files
    widget_files = [f for f in os.listdir(OUTPUT_DIR) if f.startswith('CD') and f.endswith('-widget.html')]
    widget_files.sort()

    success_count = 0
    for widget_file in widget_files:
        try:
            success, message = add_icons_to_widget(widget_file)
            if success:
                success_count += 1
                print(f"{widget_file}: {message}")
            else:
                print(f"{widget_file}: ERROR - {message}")
        except Exception as e:
            print(f"{widget_file}: ERROR - {e}")

    print("=" * 60)
    print(f"Complete! Processed {success_count}/{len(widget_files)} widgets")
    print("=" * 60)

if __name__ == "__main__":
    main()
