"""
Generate all 46 CD template widgets from the Countdown application.
Run this script to automatically create CD001-widget.html through CD046-widget.html
"""

import os
import re
import json

# Configuration
REFERENCE_PATH = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX"
OUTPUT_PATH = r"D:\ClaudeOutput"
EXERCISES_JS = os.path.join(REFERENCE_PATH, "js", "exercises.js")
DATA_UNITS_PATH = os.path.join(REFERENCE_PATH, "data", "units")
CSS_PATH = os.path.join(REFERENCE_PATH, "css")
ICONS_PATH = os.path.join(REFERENCE_PATH, "img", "icons")

# CSS Files to read
CSS_FILES = ["interface.css", "exercises.css", "icons.css"]

def read_file(filepath):
    """Read file contents"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return ""

def extract_function(js_content, function_name):
    """Extract a JavaScript function from exercises.js"""
    pattern = rf'function {function_name}\(\).*?^}}'
    match = re.search(pattern, js_content, re.MULTILINE | re.DOTALL)
    if match:
        return match.group(0)
    return None

def find_sample_data(template_id):
    """Find sample JSON data for a template"""
    # Search through all unit directories
    for root, dirs, files in os.walk(DATA_UNITS_PATH):
        for file in files:
            if file == "exercises.json":
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        for ex in data.get("exercises", []):
                            if ex.get("pageID") == template_id:
                                # Found it! Return the exercise
                                return json.dumps([ex], indent=4)
                except:
                    continue
    return None

def get_icon_classes_from_function(function_code):
    """Extract icon class names from function code"""
    icons = set()
    # Look for patterns like .icon or "ic* or 'ic*
    patterns = [
        r'"(ic[A-Za-z0-9]+)"',
        r"'(ic[A-Za-z0-9]+)'",
        r'\.(ic[A-Za-z0-9]+)\b'
    ]
    for pattern in patterns:
        matches = re.findall(pattern, function_code)
        icons.update(matches)
    return sorted(icons)

def generate_icon_css(icons):
    """Generate CSS for icon classes"""
    css = ""
    for icon in icons:
        css += f"""        .{icon} {{
            background-image: url('{ICONS_PATH}\\{icon}.svg');
        }}

"""
    return css

def create_widget(template_id, template_num):
    """Create a single widget HTML file"""
    print(f"Creating {template_id}...")

    # Read exercises.js
    js_content = read_file(EXERCISES_JS)
    if not js_content:
        print(f"  Error: Could not read exercises.js")
        return False

    # Extract functions
    main_func = extract_function(js_content, template_id)
    play_func = extract_function(js_content, f"{template_id}Play")

    if not main_func:
        print(f"  Warning: No function found for {template_id}")
        return False

    # Find sample data
    sample_data = find_sample_data(template_id)
    if not sample_data:
        print(f"  Warning: No sample data found, using placeholder")
        sample_data = json.dumps([{
            "pageID": template_id,
            "title": f"{template_id} Placeholder",
            "dataSet": []
        }], indent=4)

    # Get icon classes
    all_code = main_func + (play_func or "")
    icons = get_icon_classes_from_function(all_code)

    # Read CSS (basic styles only to keep file size reasonable)
    base_css = """
        body, html {
            width: 100%;
            font-size: 14px;
            height: 100%;
            font-family: Arial, sans-serif;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }

        #wrapper {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #9ed6de;
            overflow: hidden;
            text-align: center;
        }

        .contentPanel {
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
        }

        .fullScreen {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4em;
        }

        .letter {
            border-bottom: solid .08em rgba(0,0,0,1);
            width: 100%;
            display: block;
        }

        .vowel {
            color: rgba(200,0,0,1);
            border-bottom: solid .08em rgba(200,0,0,1);
            display: block;
            width: 100%;
        }

        .letterTileBack {
            display: inline-block;
            position: relative;
            margin: 0;
            padding: 0;
            margin-left: .25em;
            margin-right: .25em;
            cursor: pointer;
        }

        .letterTile {
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
        }

        .letterTileGreen { background-color: #0c0; }
        .letterTileBlue { background-color: #00c; }
        .letterTileRed { background-color: #f00; }
        .letterTileYellow { background-color: #ff0; }
        .letterTilePurple { background-color: #90c; }
        .letterTileOrange { background-color: #fa0; }

        .blockIcon {
            height: 12em;
            width: 12em;
            border-radius: 50%;
            background-size: 100% 100%;
            background-position: center center;
            background-color: #b4e2f0;
            display: inline-block;
            margin: 1em;
        }

        .standardIcon {
            position: relative;
            height: 4em;
            width: 4em;
            display: inline-block;
            border-radius: 50%;
            background-size: 100% 100%;
            background-position: center center;
            background-color: #b4e2f0;
        }

        .heartWord {
            font-size: 6em;
            font-family: Arial, sans-serif;
            font-weight: bold;
        }
"""

    # Generate HTML
    html = f"""<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{template_id} Widget</title>
    <style>
{base_css}
{generate_icon_css(icons)}
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="{template_id}" class="contentPanel"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        var exerciseData = {{
            "exercises": {sample_data}
        }};

        var pageNum = 1;
        var step = 0;
        var clicker = 'click';

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

        {play_func if play_func else ""}

        $(document).ready(function() {{
            {template_id}();
        }});
    </script>
</body>
</html>
"""

    # Write file
    output_file = os.path.join(OUTPUT_PATH, f"{template_id}-widget.html")
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"  Created: {output_file}")
        return True
    except Exception as e:
        print(f"  Error writing file: {e}")
        return False

def main():
    """Generate all widgets"""
    print("=" * 60)
    print("Countdown Widget Generator")
    print("=" * 60)
    print(f"Reference: {REFERENCE_PATH}")
    print(f"Output: {OUTPUT_PATH}")
    print("")

    # Create output directory if needed
    os.makedirs(OUTPUT_PATH, exist_ok=True)

    # Generate all widgets
    success_count = 0
    for i in range(1, 47):
        template_id = f"CD{i:03d}"
        if create_widget(template_id, i):
            success_count += 1

    print("")
    print("=" * 60)
    print(f"Complete! Created {success_count}/46 widgets")
    print("=" * 60)

if __name__ == "__main__":
    main()
