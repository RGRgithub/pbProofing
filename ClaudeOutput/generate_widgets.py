import json
import re
import os
from pathlib import Path

# Base paths
BASE_PATH = r"d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX"
OUTPUT_PATH = r"D:\ClaudeOutput"
EXERCISES_JS = os.path.join(BASE_PATH, "js", "exercises.js")
DATA_DIR = os.path.join(BASE_PATH, "data", "units")
CSS_DIR = os.path.join(BASE_PATH, "css")
IMG_DIR = os.path.join(BASE_PATH, "img")

# Read all CSS files
def read_css_files():
    """Read and combine all CSS files"""
    css_content = ""
    css_files = ["interface.css", "exercises.css", "icons.css"]
    for css_file in css_files:
        css_path = os.path.join(CSS_DIR, css_file)
        if os.path.exists(css_path):
            with open(css_path, 'r', encoding='utf-8') as f:
                css_content += f"/* {css_file} */\n"
                css_content += f.read() + "\n\n"
    return css_content

# Read exercises.js
def read_exercises_js():
    """Read the exercises.js file"""
    with open(EXERCISES_JS, 'r', encoding='utf-8') as f:
        return f.read()

# Extract a specific function from exercises.js
def extract_function(js_content, func_name):
    """Extract a function and its Play variant if exists"""
    # Find the main function
    pattern = rf'function {func_name}\(\).*?\n}}\n'
    main_match = re.search(pattern, js_content, re.DOTALL)
    main_func = main_match.group(0) if main_match else ""

    # Find the Play function if exists
    play_pattern = rf'function {func_name}Play\(\).*?\n}}\n'
    play_match = re.search(play_pattern, js_content, re.DOTALL)
    play_func = play_match.group(0) if play_match else ""

    return main_func, play_func

# Find data for a specific template
def find_template_data(template_id):
    """Search all JSON files for data matching the template ID"""
    data_files = []
    for root, dirs, files in os.walk(DATA_DIR):
        for file in files:
            if file == "exercises.json":
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        # Check if any exercise has this pageID
                        for ex in data.get("exercises", []):
                            if ex.get("pageID") == template_id:
                                data_files.append((file_path, ex))
                                break  # Found one example, that's enough
                except Exception as e:
                    continue

    return data_files[0] if data_files else (None, None)

# Get template description
def get_template_description(template_id, exercise_data):
    """Generate a description based on the template data"""
    if not exercise_data:
        return f"{template_id} Template"

    title = exercise_data.get("title", "")
    if title:
        return f"{template_id} - {title}"
    return f"{template_id} Template"

# Generate widget HTML
def generate_widget(template_id, main_func, play_func, exercise_data, css_content):
    """Generate the complete widget HTML"""

    # Replace nextPage() calls with loop behavior in play function
    if play_func:
        play_func = play_func.replace("nextPage()", f"{template_id}()")

    # Prepare the exercise data (create a minimal data structure)
    if exercise_data:
        data_json = json.dumps({"exercises": [exercise_data]}, indent=4)
    else:
        data_json = json.dumps({"exercises": [{"pageID": template_id, "title": "Sample Data"}]}, indent=4)

    description = get_template_description(template_id, exercise_data)

    # Replace image paths in CSS to use absolute paths
    css_with_abs_paths = css_content.replace("url('../img/", f"url('{IMG_DIR.replace(chr(92), '/')}/")
    css_with_abs_paths = css_with_abs_paths.replace("url(../img/", f"url('{IMG_DIR.replace(chr(92), '/')}/")

    html = f'''<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{description} Widget</title>
    <style>
        {css_with_abs_paths}
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="{template_id}" class="contentPanel"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        var exerciseData = {data_json};
        var pageNum = 1;
        var step = 0;
        var clicker = 'click';

        {main_func}

        {play_func}

        $(document).ready(function() {{
            $('#{template_id}').show();
            {template_id}();
        }});
    </script>
</body>
</html>'''

    return html

# Main execution
def main():
    print("Starting widget generation...")

    # Read CSS
    print("Reading CSS files...")
    css_content = read_css_files()

    # Read JS
    print("Reading exercises.js...")
    js_content = read_exercises_js()

    # Generate widgets for CD001 to CD046
    widget_list = []

    for i in range(1, 47):
        template_id = f"CD{i:03d}"
        print(f"\nProcessing {template_id}...")

        # Extract functions
        main_func, play_func = extract_function(js_content, template_id)

        if not main_func:
            print(f"  WARNING: No function found for {template_id}")
            continue

        # Find data
        data_file, exercise_data = find_template_data(template_id)

        if data_file:
            print(f"  Found data in: {data_file}")
        else:
            print(f"  WARNING: No data found for {template_id}, using placeholder")

        # Generate widget
        widget_html = generate_widget(template_id, main_func, play_func, exercise_data, css_content)

        # Write widget file
        widget_filename = f"{template_id}-widget.html"
        widget_path = os.path.join(OUTPUT_PATH, widget_filename)

        with open(widget_path, 'w', encoding='utf-8') as f:
            f.write(widget_html)

        description = get_template_description(template_id, exercise_data)
        widget_list.append({
            "id": template_id,
            "description": description,
            "filename": widget_filename,
            "data_source": data_file if data_file else "No data found"
        })

        print(f"  Created: {widget_filename}")

    # Generate index file
    print("\n\nGenerating WIDGET-INDEX.html...")
    generate_index(widget_list)

    print(f"\n\nCompleted! Generated {len(widget_list)} widgets.")
    return widget_list

def generate_index(widget_list):
    """Generate the index HTML file"""
    rows = ""
    for widget in widget_list:
        rows += f'''        <tr>
            <td><a href="{widget['filename']}" target="_blank">{widget['id']}</a></td>
            <td>{widget['description']}</td>
            <td style="font-size: 0.8em; color: #666;">{os.path.basename(widget['data_source'])}</td>
        </tr>
'''

    html = f'''<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Countdown Widgets Index</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }}
        h1 {{
            color: #2eacbe;
            border-bottom: 3px solid #adcc3f;
            padding-bottom: 10px;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
        th {{
            background-color: #2eacbe;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: bold;
        }}
        td {{
            padding: 10px 12px;
            border-bottom: 1px solid #ddd;
        }}
        tr:hover {{
            background-color: #f0f0f0;
        }}
        a {{
            color: #2eacbe;
            text-decoration: none;
            font-weight: bold;
        }}
        a:hover {{
            color: #adcc3f;
            text-decoration: underline;
        }}
        .summary {{
            background-color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
    </style>
</head>
<body>
    <h1>Countdown Template Widgets - Complete Index</h1>

    <div class="summary">
        <h2>Summary</h2>
        <p><strong>Total Widgets:</strong> {len(widget_list)}</p>
        <p><strong>Template Range:</strong> CD001 through CD046</p>
        <p><strong>Description:</strong> Standalone HTML widgets extracted from the Countdown educational platform.
        Each widget is self-contained and can be run by double-clicking the HTML file.</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>Template ID</th>
                <th>Description</th>
                <th>Data Source</th>
            </tr>
        </thead>
        <tbody>
{rows}
        </tbody>
    </table>

    <div class="summary" style="margin-top: 20px;">
        <h2>Usage Instructions</h2>
        <ul>
            <li>Click any Template ID to open the widget in a new tab</li>
            <li>Widgets are standalone and require no server setup</li>
            <li>All widgets use jQuery 3.2.1 from CDN</li>
            <li>Icon images reference the original project directory</li>
        </ul>
    </div>
</body>
</html>'''

    index_path = os.path.join(OUTPUT_PATH, "WIDGET-INDEX.html")
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"  Created: WIDGET-INDEX.html")

if __name__ == "__main__":
    widget_list = main()

    # Print summary
    print("\n\n=== SUMMARY ===")
    for widget in widget_list:
        print(f"{widget['id']}: {widget['description']}")
        print(f"  Source: {widget['data_source']}")
        print()
