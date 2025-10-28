#!/usr/bin/env python3
import re, json, os

REFERENCE_SITE = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX"
EXERCISES_JS = os.path.join(REFERENCE_SITE, "js", "exercises.js")
DATA_UNITS_PATH = os.path.join(REFERENCE_SITE, "data", "units")
ICONS_PATH = os.path.join(REFERENCE_SITE, "img", "icons")

with open(EXERCISES_JS, 'r', encoding='utf-8') as f:
    js = f.read()

# Find CD045 function - it's very long
pattern = r'function CD045\(\) \{'
match = re.search(pattern, js)
if not match:
    print("ERROR: CD045 function not found")
    exit(1)

start = match.start()
brace_count = 0
end = start

# Search through entire file if needed
for i in range(start, len(js)):
    if js[i] == '{':
        brace_count += 1
    elif js[i] == '}':
        brace_count -= 1
        if brace_count == 0:
            end = i + 1
            break

cd045_func = js[start:end]
print(f"Extracted CD045 function: {len(cd045_func)} characters")

# Extract CD045Play
pattern2 = r'function CD045Play\(\) \{'
match2 = re.search(pattern2, js)
cd045play_func = None
if match2:
    start = match2.start()
    brace_count = 0
    for i in range(start, len(js)):
        if js[i] == '{': brace_count += 1
        elif js[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                cd045play_func = js[start:i+1]
                print(f"Extracted CD045Play function: {len(cd045play_func)} characters")
                break

# Find sample data
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

# Extract icons
icons = sorted(set(re.findall(r'"icon"\s*:\s*"(ic[A-Za-z0-9_]+)"', data)))
icon_css = ""
for icon in icons:
    file_url = f"file:///{ICONS_PATH}/{icon}.svg".replace('\\', '/')
    icon_css += f"        .{icon} {{\n            background-image: url('{file_url}');\n        }}\n\n"

# Extract global vars
global_vars = [line.strip() for line in js.split('\n') if re.match(r'^var CD045[A-Za-z0-9_]+.*;$', line.strip())]
global_vars_str = '\n        ' + '\n        '.join(global_vars) if global_vars else ''

# Write HTML
html = f"""<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CD045 Widget</title>
    <style>
        body, html {{ margin: 0; padding: 0; width: 100%; height: 100%; font-family: Arial; font-size: 14px; overflow: hidden; }}
        #wrapper {{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #9ed6de; text-align: center; }}
        .contentPanel {{ position: absolute; top: 1em; bottom: 3em; left: 1em; right: 1em; padding: 2em; padding-top: 4em; background-color: rgba(255,255,255,.95); border-radius: 1em; }}
        .fullScreen {{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; padding: 4em; }}
        .letter {{ border-bottom: solid .08em rgba(0,0,0,1); width: 100%; display: block; }}
        .vowel {{ color: rgba(200,0,0,1); border-bottom: solid .08em rgba(200,0,0,1); width: 100%; display: block; }}
        .letterTileBack {{ display: inline-block; position: relative; margin-left: .25em; margin-right: .25em; cursor: pointer; }}
        .letterTile {{ display: block; position: relative; font-size: 2em; height: 2em; width: 1.5em; background-color: #fff; border: solid .02em rgba(0,0,0,.8); border-radius: .05em; cursor: pointer; text-align: center; line-height: 1.8em; font-weight: bold; }}
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
        var clicker = 'click';{global_vars_str}

        function checkLetter(letter) {{
            var vowelString = 'aeiouAEIOU';
            return vowelString.indexOf(letter) > -1 ? '<span class="vowel">' + letter + '</span>' : '<span class="letter">' + letter + '</span>';
        }}

        function initPage() {{}}
        function nextPage() {{ step = 0; CD045(); }}

        {cd045_func}

        {cd045play_func if cd045play_func else ''}

        $(document).ready(function() {{ CD045(); }});
    </script>
</body>
</html>
"""

with open('CD045-widget.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("CD045-widget.html created successfully!")
