#!/usr/bin/env python3
import os, json, re

REFERENCE_SITE = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX"
DATA_UNITS_PATH = os.path.join(REFERENCE_SITE, "data", "units")
ICONS_PATH = os.path.join(REFERENCE_SITE, "img", "icons")

# Read extracted functions from temp
temp_dir = os.environ.get('TEMP', '/tmp')
with open(os.path.join(temp_dir, 'cd045_only.js'), 'r', encoding='utf-8') as f:
    cd045_func = f.read()
with open(os.path.join(temp_dir, 'cd045play_only.js'), 'r', encoding='utf-8') as f:
    cd045play_func = f.read()

print(f"CD045 function: {len(cd045_func)} chars")
print(f"CD045Play function: {len(cd045play_func)} chars")

# Find data
data = None
for root, dirs, files in os.walk(DATA_UNITS_PATH):
    for file in files:
        if file == "exercises.json":
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    d = json.load(f)
                    for ex in d.get("exercises", []):
                        if ex.get("pageID") == "CD045":
                            data = json.dumps([ex], indent=4)
                            break
            except: pass
            if data: break
    if data: break

if not data:
    data = json.dumps([{"pageID": "CD045", "title": "Template CD045", "dataSet": []}], indent=4)

# Icons
icons = sorted(set(re.findall(r'"icon"\s*:\s*"(ic[A-Za-z0-9_]+)"', data)))
icon_css = ""
for icon in icons:
    file_url = f"file:///{ICONS_PATH}/{icon}.svg".replace('\\', '/')
    icon_css += f"        .{icon} {{\n            background-image: url('{file_url}');\n        }}\n\n"

# Build HTML
html = f"""<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CD045 Widget</title>
    <style>
        body, html {{ margin: 0; padding: 0; width: 100%; height: 100%; font-family: Arial; font-size: 14px; overflow: hidden; }}
        #wrapper {{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #9ed6de; text-align: center; }}
        .contentPanel {{ position: absolute; top: 1em; bottom: 3em; left: 1em; right: 1em; padding: 2em; padding-top: 4em; background-color: rgba(255,255,255,.95); border-radius: 1em; overflow: auto; }}
        .fullScreen {{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; padding: 4em; }}
        .letter {{ border-bottom: solid .08em rgba(0,0,0,1); width: 100%; display: block; }}
        .vowel {{ color: rgba(200,0,0,1); border-bottom: solid .08em rgba(200,0,0,1); width: 100%; display: block; }}
        .blockIcon {{ height: 12em; width: 12em; border-radius: 50%; background-size: 100%; background-position: center; background-color: #b4e2f0; display: inline-block; margin: 1em; }}
{icon_css}    </style>
</head>
<body>
    <div id="wrapper"><div id="CD045" class="contentPanel"></div></div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        var exerciseData = {{ "exercises": {data} }};
        var pageNum = 1;
        var step = 0;
        var clicker = 'click';

        function checkLetter(letter) {{
            return 'aeiouAEIOU'.indexOf(letter) > -1 ? '<span class="vowel">' + letter + '</span>' : '<span class="letter">' + letter + '</span>';
        }}

        function initPage() {{}}
        function nextPage() {{ step = 0; CD045(); }}

        {cd045_func}

        {cd045play_func}

        $(document).ready(function() {{ CD045(); }});
    </script>
</body>
</html>
"""

with open(r'D:\ClaudeOutput\CD045-widget.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("CD045-widget.html created!")
