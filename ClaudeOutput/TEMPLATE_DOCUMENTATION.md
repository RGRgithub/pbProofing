# Countdown Template Documentation

## Overview
The Countdown curriculum application uses a template-based system where:
- **Units** contain **Lessons** which contain **Parts** which contain **Pages**
- Each page uses a **Template** (e.g., CD001, CD023, CD013, etc.)
- Templates are populated with data from **JSON files**
- JavaScript functions render the templates dynamically

## Data Structure

### Exercise JSON Format
Located in: `data/units/unit##/lesson#/part#/exercises.json`

```json
{
  "exercises": [
    {
      "pageID": "CD023",
      "title": "Unscramble This 12.1",
      "dataSet": [
        {
          "icon": "icSit",
          "letters": ["s", "i", "t"],
          "preorder": ["2", "1", "3"]
        }
      ]
    }
  ]
}
```

## Common Template Types

### CD001 - Title Page
Simple title screen with unit/lesson/part information.

**JSON Structure:**
```json
{
  "pageID": "CD001",
  "title": "Title Text",
  "unitText": "Unit X",
  "lessonText": "Lesson Y",
  "partText": "Part Z"
}
```

### CD023 - Unscramble This
Interactive word unscrambling activity where scrambled letters are shown and must be arranged in correct order.

**JSON Structure:**
```json
{
  "pageID": "CD023",
  "title": "Unscramble This",
  "dataSet": [
    {
      "icon": "icSit",           // Icon class to display
      "letters": ["s","i","t"],   // Letters in correct order
      "preorder": ["2","1","3"]   // Scrambled positions (1-indexed)
    }
  ]
}
```

**How it works:**
1. Displays scrambled letter tiles with an icon
2. On click, tiles animate to correct positions one by one
3. Multiple words in dataSet are shown sequentially

### CD013 - Which Letter?
Multiple choice activity to identify missing letters in words.

**JSON Structure:**
```json
{
  "pageID": "CD013",
  "title": "Which Letter?",
  "dataSet": [
    {
      "icon": "icBed",
      "letters": ["b","e","d"],
      "blankSpot": "1",           // Which position is blank (1-indexed)
      "answers": ["b","k","r"],    // Three answer choices
      "correctSpot": "1"           // Which answer is correct (1-indexed)
    }
  ]
}
```

### CD015 - Build a Word
Activity where students build words from color-coded letter tiles.

**JSON Structure:**
```json
{
  "pageID": "CD015",
  "title": "Build a Word",
  "dataSet": [
    {
      "icon": "icNap",
      "colors": ["Blue","Red","Green"],
      "letters": ["n","a","p"]
    }
  ]
}
```

### HTMLBLOCK - Custom HTML Content
Allows custom HTML to be injected directly.

**JSON Structure:**
```json
{
  "pageID": "HTMLBLOCK",
  "code": "<h1>Custom HTML goes here</h1>",
  "links": "true"  // If true, shows NEXT button; if false, click anywhere to advance
}
```

### RI004 - Reading Instructions
Displays a list of questions or instructions.

**JSON Structure:**
```json
{
  "pageID": "RI004",
  "subtitle": "Instructions",
  "questions": [
    "Question 1",
    "Question 2"
  ],
  "links": "true"
}
```

## Template Patterns

### Common Data Fields
- `pageID`: Template identifier (CD001, CD023, etc.)
- `title`: Page title
- `dataSet`: Array of items for the activity (most templates)
- `icon`: CSS class for icon (format: `ic` + PascalCase, e.g., `icSit`, `icBed`)

### Icon System
Icons are defined via CSS classes in the format `ic[Name]`:
- `icSit` - sitting person
- `icBed` - bed
- `icMap` - map
- `icHat` - hat
etc.

### Letter Display
The `checkLetter()` function wraps letters:
- Vowels: `<span class="vowel">a</span>`
- Consonants: `<span class="letter">b</span>`

## JavaScript Functions

Each template has two main functions:
1. **Setup function** (e.g., `CD023()`) - Initializes the page, builds HTML, sets up event handlers
2. **Play function** (e.g., `CD023Play()`) - Handles interactions and progression

### Common Pattern:
```javascript
function CD023() {
  // 1. Process data
  // 2. Build HTML string
  // 3. Inject into DOM: $('#CD023').html(htmlString)
  // 4. Apply CSS positioning
  // 5. Bind click handler
  // 6. Call initPage()
}

function CD023Play() {
  // 1. Track step
  // 2. Animate current step
  // 3. When complete, call nextPage()
}
```

## Creating Standalone Widgets

To create a standalone widget:
1. Extract the template HTML structure from indexDRUPAL.html
2. Copy relevant CSS files (interface.css, exercises.css, icons.css, etc.)
3. Copy the template's JavaScript functions
4. Create sample JSON data
5. Initialize the widget with the data

See example files in this directory for working implementations.
