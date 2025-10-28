# Countdown Template Widgets - Exact Extractions

These are **exact standalone extractions** of templates from the Countdown reading curriculum application. The HTML structure, CSS, and JavaScript are copied directly from the original files with minimal changes to make them work standalone.

## Files

### Extracted Widgets
- **CD015-widget.html** - "Build a Word" template (exact extraction)
- **CD023-widget.html** - "Unscramble This" template (exact extraction)

### What Makes These "Exact"

These widgets:
1. Use the **exact same HTML structure** as defined in `indexDRUPAL.html`
2. Use the **exact same CSS** from `exercises.css`, `icons.css`, and `interface.css`
3. Use the **exact same JavaScript functions** from `exercises.js` (CD015, CD015Play, CD023, CD023Play, etc.)
4. Use the **exact same data format** from the original JSON files in `data/units/`
5. Reference the **exact same icon files** from the reference site

## How to Use

### Requirements
1. The reference site must be at: `d:/Dropbox/OLT/~Drupal Versions/drp-countdownTX/`
2. Icon images must be accessible at the reference location
3. Modern web browser with JavaScript enabled
4. jQuery (loaded from CDN automatically)

### Opening a Widget
1. Double-click any `.html` file
2. The widget will load and function exactly like it does in the original Countdown application
3. Click anywhere in the widget to advance through the activity
4. When complete, the widget loops back to the beginning

## Widget Details

### CD015 - Build a Word
**Source Files:**
- Template div: `indexDRUPAL.html` line 465
- JavaScript: `js/exercises.js` lines 1241-1366 (function CD015 and CD015Play)
- Data: `data/units/unit9/lesson4/part3/exercises.json`

**How it works:**
1. Shows colored tiles (Blue, Red, Green) and letter tiles (initially hidden)
2. Click 1: Reveals icon
3. Clicks 2-4: Reveal color tiles one by one
4. Clicks 5-7: Reveal letter tiles one by one
5. Click 8: Advances to next word
6. Repeats for all 10 words in dataset

**Data structure:**
```json
{
  "icon": "icSit",
  "colors": ["Blue", "Red", "Green"],
  "letters": ["s", "i", "t"]
}
```

### CD023 - Unscramble This
**Source Files:**
- Template div: `indexDRUPAL.html` (CD023 div)
- JavaScript: `js/exercises.js` lines 1953-2097 (function CD023 and CD023Play)
- Data: `data/units/unit33/lesson1/part4/exercises.json`

**How it works:**
1. Shows scrambled letter tiles with an icon
2. Letters are positioned according to `preorder` array
3. Each click moves one letter to its correct position
4. After all letters positioned, click advances to next word
5. Repeats for all 10 words in dataset

**Data structure:**
```json
{
  "icon": "icSit",
  "letters": ["s", "i", "t"],
  "preorder": ["2", "1", "3"]
}
```
- `letters`: correct letter order
- `preorder`: scrambled positions (1-indexed, where each letter starts)

## Icon System

Icons reference SVG files from the original site:
```css
.icSit {
    background-image: url('d:/Dropbox/OLT/~Drupal Versions/drp-countdownTX/img/icons/icSit.svg');
}
```

Available icons in current widgets:
- icSit, icMap, icHat, icCod, icThermometer, icScissors
- icRug, icPot, icRap, icPit, icHim, icCot
- icFit, icHop, icGumballs, icHam, icCat, icRat
- icSad, icPeas

## Customizing Data

To add or modify words, edit the `exerciseData` object in the JavaScript section:

### For CD015 (Build a Word):
```javascript
{
    "icon": "icNewIcon",      // Must match a defined icon class
    "colors": ["Blue", "Red", "Green"],
    "letters": ["n", "e", "w"]
}
```

### For CD023 (Unscramble This):
```javascript
{
    "icon": "icNewIcon",
    "letters": ["n", "e", "w"],
    "preorder": ["3", "1", "2"]  // Position 3 shown first, then 1, then 2
}
```

## Technical Notes

### Dependencies
- jQuery 3.2.1 (loaded from CDN)
- Reference site icon files

### Key Variables (from original)
- `pageNum`: Always 1 for standalone widgets
- `step`: Tracks click progression through activity
- `exerciseData`: Contains all word data
- `clicker`: Event type ('click')

### Functions (exact copies from exercises.js)
- `checkLetter(letter)`: Wraps vowels and consonants in appropriate spans
- `CD015()` / `CD023()`: Initialize the template
- `CD015Play()` / `CD023Play()`: Handle click progression

### Modifications from Original
**Only changes made:**
1. Removed `initPage()` call (not needed for standalone)
2. Changed `nextPage()` to reset/loop behavior
3. Embedded CSS and JS inline instead of external files
4. Hard-coded `pageNum = 1` (single page widget)

**Everything else is identical to the original.**

## Creating More Widgets

To extract additional templates (CD001-CD046):

1. **Find the template div** in `indexDRUPAL.html`
   ```html
   <div id="CD###" class="contentPanel"></div>
   ```

2. **Find the JavaScript functions** in `js/exercises.js`
   ```javascript
   function CD###() { ... }
   function CD###Play() { ... }
   ```

3. **Find sample data** in `data/units/unit##/lesson#/part#/exercises.json`
   - Search for `"pageID": "CD###"`

4. **Copy the exact code** into a new HTML file using the templates above as examples

5. **Add required icon CSS classes** from `css/icons.css`

## File Paths Reference

From reference site (`d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\`):
- HTML structure: `indexDRUPAL.html`
- JavaScript: `js/exercises.js`
- CSS: `css/interface.css`, `css/exercises.css`, `css/icons.css`
- Icons: `img/icons/*.svg`
- Data: `data/units/unit##/lesson#/part#/exercises.json`

## Limitations

1. **Icons require reference site**: Icon files must be accessible at original path
2. **Single exercise only**: Each widget shows one complete exercise (one pageID)
3. **No navigation**: Loops back to start instead of advancing to next exercise
4. **Fixed path dependencies**: Icon paths are hard-coded to reference site location

## Next Steps

To make fully portable widgets that don't require the reference site:
1. Copy icon SVG files to a local `img/icons/` folder
2. Update icon CSS paths to use relative paths
3. Or convert icons to data URIs embedded in CSS

---

**Created from:** Countdown Reading Curriculum v.TX
**Extraction Date:** 2025
**Source:** `d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\`
