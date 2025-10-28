#!/usr/bin/env python3
"""
Cleanly regenerate CD023 widget from scratch
"""

import os
import re
import json

# Paths
REFERENCE_SITE = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX"
EXERCISES_JS = os.path.join(REFERENCE_SITE, "js", "exercises.js")
EXERCISES_CSS = os.path.join(REFERENCE_SITE, "css", "exercises.css")
ICONS_CSS = os.path.join(REFERENCE_SITE, "css", "icons.css")
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

def find_sample_data():
    """Find CD023 data"""
    for root, dirs, files in os.walk(DATA_UNITS_PATH):
        for file in files:
            if file == "exercises.json":
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        for ex in data.get("exercises", []):
                            if ex.get("pageID") == "CD023":
                                return json.dumps([ex], indent=4)
                except:
                    continue
    return None

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

# Read source files
print("Reading source files...")
js_content = read_file(EXERCISES_JS)
json_data = find_sample_data()

if not json_data:
    print("ERROR: Could not find CD023 data")
    exit(1)

# Extract functions
print("Extracting functions...")
cd023_func = extract_function(js_content, 'CD023')
cd023play_func = extract_function(js_content, 'CD023Play')

if not cd023_func or not cd023play_func:
    print("ERROR: Could not extract functions")
    exit(1)

# Extract icons
icons = get_icon_classes_from_data(json_data)
icon_css = generate_icon_css(icons)

# Generate HTML
html = f'''<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CD023 Widget</title>
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
        <div id="CD023" class="contentPanel"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        var exerciseData = {{
            "exercises": {json_data}
        }};

        var pageNum = 1;
        var step = 0;
        var clicker = 'click';
        var CD023Positions = [];
        var CD023FinalPositions = [];
        var CD023ClickArray = [];

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
            CD023();
        }}

        {cd023_func}

        {cd023play_func}

        $(document).ready(function() {{
            CD023();
        }});
    </script>
</body>
</html>
'''

# Write file
output_path = os.path.join(OUTPUT_DIR, "CD023-widget.html")
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Successfully regenerated CD023-widget.html")
print(f"  Icons: {', '.join(icons)}")
