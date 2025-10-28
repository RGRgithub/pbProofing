#!/usr/bin/env python3
"""
Cleanly regenerate ALL 46 widgets from scratch using proper extraction
"""

import os
import re
import json

# Paths
REFERENCE_SITE = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX"
EXERCISES_JS = os.path.join(REFERENCE_SITE, "js", "exercises.js")
DATA_UNITS_PATH = os.path.join(REFERENCE_SITE, "data", "units")
ICONS_PATH = os.path.join(REFERENCE_SITE, "img", "icons")
OUTPUT_DIR = r"D:\ClaudeOutput"

def read_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return None

def extract_function(js_content, function_name):
    """Extract a complete function using brace counting"""
    pattern = rf'function {function_name}\(\)\s*\{{'
    match = re.search(pattern, js_content)
    if not match:
        return None

    start = match.start()
    brace_count = 0
    for i in range(start, len(js_content)):
        if js_content[i] == '{':
            brace_count += 1
        elif js_content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                return js_content[start:i+1]
    return None

def extract_global_vars(js_content, template_id):
    """Extract global variable declarations for a template"""
    pattern = rf'^var {template_id}[A-Za-z0-9_]+.*;$'
    vars_found = []
    for line in js_content.split('\n'):
        line_stripped = line.strip()
        if re.match(pattern, line_stripped):
            vars_found.append(line_stripped)
    return vars_found

def find_sample_data(template_id):
    """Find sample JSON data for a template"""
    for root, dirs, files in os.walk(DATA_UNITS_PATH):
        for file in files:
            if file == "exercises.json":
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        for ex in data.get("exercises", []):
                            if ex.get("pageID") == template_id:
                                return json.dumps([ex], indent=4)
                except:
                    continue

    # Return placeholder if not found
    return json.dumps([{
        "pageID": template_id,
        "title": "Template " + template_id,
        "dataSet": []
    }], indent=4)

def get_icon_classes_from_data(json_str):
    """Extract icon class names from JSON"""
    icons = set()
    pattern = r'"icon"\s*:\s*"(ic[A-Za-z0-9_]+)"'
    matches = re.findall(pattern, json_str)
    icons.update(matches)
    return sorted(icons)

def generate_icon_css(icons):
    """Generate CSS for icons"""
    if not icons:
        return ""
    css_lines = []
    for icon in icons:
        file_url = f"file:///{ICONS_PATH}/{icon}.svg".replace('\\', '/')
        css_lines.append(f"        .{icon} {{")
        css_lines.append(f"            background-image: url('{file_url}');")
        css_lines.append(f"        }}")
        css_lines.append("")
    return "\n".join(css_lines)

def create_widget(template_id, js_content):
    """Create a single widget from scratch"""

    # Extract functions
    main_func = extract_function(js_content, template_id)
    play_func = extract_function(js_content, f'{template_id}Play')

    if not main_func:
        return False, f"Could not extract {template_id}() function"

    # Extract global vars
    global_vars = extract_global_vars(js_content, template_id)
    global_vars_str = '\n        '.join(global_vars) if global_vars else ''
    if global_vars_str:
        global_vars_str = '\n        ' + global_vars_str

    # Get sample data
    json_data = find_sample_data(template_id)

    # Extract icons
    icons = get_icon_classes_from_data(json_data)
    icon_css = generate_icon_css(icons)

    # Generate HTML
    html = f'''<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{template_id} Widget</title>
    <style>

        body, html {{
            width: 100%;
            font-size: 14px;
            height: 100%;
            font-family: Arial, sans-serif;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }}

        #wrapper {{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #9ed6de;
            overflow: hidden;
            text-align: center;
        }}

        .contentPanel {{
            position: absolute;
            top: 1em;
            bottom: 3em;
            left: 1em;
            right: 1em;
            text-align: center;
            overflow: hidden;
            padding: 2em;
            padding-top: 4em;
            background-color: rgba(255, 255, 255, .95);
            border-radius: 1em;
            display: block;
            z-index: 2;
        }}

        .fullScreen {{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4em;
        }}

        .letter {{
            border-bottom: solid .08em rgba(0,0,0,1);
            width: 100%;
            display: block;
        }}

        .vowel {{
            color: rgba(200,0,0,1);
            border-bottom: solid .08em rgba(200,0,0,1);
            display: block;
            width: 100%;
        }}

        .letterTileBack {{
            display: inline-block;
            position: relative;
            margin: 0;
            padding: 0;
            margin-left: .25em;
            margin-right: .25em;
            cursor: pointer;
        }}

        .letterTile {{
            display: block;
            position: relative;
            font-size: 2em;
            height: 2em;
            width: 1.5em;
            background-color: #fff;
            border: solid .02em rgba(0,0,0,.8);
            border-radius: .05em;
            cursor: pointer;
            text-align: center;
            line-height: 1.8em;
            font-family: Arial, sans-serif;
            font-weight: bold;
        }}

        .letterTileGreen {{ background-color: #0c0; }}
        .letterTileBlue {{ background-color: #00c; }}
        .letterTileRed {{ background-color: #f00; }}
        .letterTileYellow {{ background-color: #ff0; }}
        .letterTilePurple {{ background-color: #90c; }}
        .letterTileOrange {{ background-color: #fa0; }}

        .blockIcon {{
            height: 12em;
            width: 12em;
            border-radius: 50%;
            background-size: 100% 100%;
            background-position: center center;
            background-color: #b4e2f0;
            display: inline-block;
            margin: 1em;
        }}

        .standardIcon {{
            position: relative;
            height: 4em;
            width: 4em;
            display: inline-block;
            border-radius: 50%;
            background-size: 100% 100%;
            background-position: center center;
            background-color: #b4e2f0;
        }}

        .heartWord {{
            font-size: 6em;
            font-family: Arial, sans-serif;
            font-weight: bold;
        }}

{icon_css}

    </style>
</head>
<body>
    <div id="wrapper">
        <div id="{template_id}" class="contentPanel"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        var exerciseData = {{
            "exercises": {json_data}
        }};

        var pageNum = 1;
        var step = 0;
        var clicker = 'click';{global_vars_str}

        function checkLetter(letter) {{
            var vowelString = 'aeiouAEIOU';
            if (vowelString.indexOf(letter) > -1) {{
                return '<span class="vowel">' + letter + '</span>';
            }} else {{
                return '<span class="letter">' + letter + '</span>';
            }}
        }}

        function initPage() {{
            // Removed - not needed for standalone
        }}

        function nextPage() {{
            // Loop back to start
            step = 0;
            {template_id}();
        }}

        {main_func}
'''

    # Add play function if it exists
    if play_func:
        html += f'''
        {play_func}
'''

    html += f'''
        $(document).ready(function() {{
            {template_id}();
        }});
    </script>
</body>
</html>
'''

    # Write file
    output_path = os.path.join(OUTPUT_DIR, f"{template_id}-widget.html")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

    icon_msg = f" ({len(icons)} icons)" if icons else ""
    play_msg = " + Play" if play_func else ""
    return True, f"{template_id}(){play_msg}{icon_msg}"

def main():
    print("=" * 70)
    print("Regenerating ALL 46 Widgets from Scratch")
    print("=" * 70)

    # Read exercises.js once
    print("Reading exercises.js...")
    js_content = read_file(EXERCISES_JS)
    if not js_content:
        print("ERROR: Could not read exercises.js")
        return

    # Generate all widgets
    success_count = 0
    for i in range(1, 47):
        template_id = f"CD{i:03d}"
        try:
            success, message = create_widget(template_id, js_content)
            if success:
                success_count += 1
                print(f"{template_id}: {message}")
            else:
                print(f"{template_id}: ERROR - {message}")
        except Exception as e:
            print(f"{template_id}: ERROR - {e}")

    print("=" * 70)
    print(f"Complete! Successfully generated {success_count}/46 widgets")
    print("=" * 70)

if __name__ == "__main__":
    main()
