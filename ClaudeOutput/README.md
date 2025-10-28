# Countdown Template Widgets - Standalone Examples

This directory contains standalone, self-contained HTML widgets recreated from the Countdown reading curriculum templates. Each widget can be opened directly in a browser without requiring the full Countdown application.

## 📁 Files in This Directory

### Documentation
- **TEMPLATE_DOCUMENTATION.md** - Comprehensive documentation of the original Countdown template system, data structures, and patterns

### Standalone Widgets
- **widget-cd023-unscramble.html** - "Unscramble This" interactive word activity
- **widget-cd013-which-letter.html** - "Which Letter?" multiple choice letter identification
- **widget-cd015-build-word.html** - "Build a Word" color-coded letter building activity

## 🚀 How to Use

### Opening a Widget
Simply double-click any of the `.html` files to open them in your default web browser, or right-click and select "Open with" to choose a specific browser.

**No installation required!** Each widget is completely self-contained.

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection (for loading jQuery from CDN)

## 🎯 Widget Descriptions

### CD023 - Unscramble This
**File:** `widget-cd023-unscramble.html`

**What it does:**
- Displays scrambled letter tiles with an icon representing the word
- Letters are initially shown in scrambled positions
- Click anywhere to reveal letters one by one in their correct positions
- Progresses through multiple words

**Sample Data:** 5 three-letter words (sit, map, hat, pot, hop)

**Educational Purpose:** Helps students recognize letter order and word formation

---

### CD013 - Which Letter?
**File:** `widget-cd013-which-letter.html`

**What it does:**
- Shows an icon and a word with one missing letter
- Presents three letter choices
- Click the correct letter to complete the word
- Tracks score and shows feedback (correct/incorrect)
- Progresses through multiple questions

**Sample Data:** 10 three-letter words with missing initial letters

**Educational Purpose:** Develops phonemic awareness and letter-sound correspondence

---

### CD015 - Build a Word
**File:** `widget-cd015-build-word.html`

**What it does:**
- Displays color-coded tiles (Blue = beginning, Red = middle, Green = end)
- Shows an icon representing the target word
- Click tiles in sequence to reveal letters and build the word
- Letters must be revealed in order from first to last
- Progresses through multiple words

**Sample Data:** 10 three-letter words with color-coded positions

**Educational Purpose:** Teaches word structure and sequential letter placement

## 🔧 Customizing the Widgets

Each widget is self-contained and easy to modify. The data is stored in a JavaScript object at the bottom of each HTML file.

### Example: Adding Words to CD023 (Unscramble)

Open `widget-cd023-unscramble.html` in a text editor and find this section:

```javascript
var exerciseData = {
    exercises: [{
        pageID: "CD023",
        title: "Unscramble This Sample",
        dataSet: [
            {
                icon: "icSit",
                letters: ["s", "i", "t"],
                preorder: ["2", "1", "3"]  // Position 2, then 1, then 3
            },
            // Add more words here
        ]
    }]
};
```

**To add a new word:**
1. Add a new object to the `dataSet` array
2. Choose an icon (see Icon Reference below)
3. List the letters in correct order
4. Define the scrambled order using `preorder` (1-indexed positions)

### Icon Reference

Icons are defined using emoji characters. To add or change icons, find the CSS section with `.ic[Name]::before` definitions:

```css
.icSit::before { content: '🪑'; }
.icMap::before { content: '🗺️'; }
.icHat::before { content: '🎩'; }
```

You can:
- Change existing emoji by replacing the content value
- Add new icons by creating new CSS rules
- Use any emoji from [Emojipedia](https://emojipedia.org/)

### Changing Colors and Styles

Each widget has a `<style>` section in the HTML head. You can modify:
- **Background gradients** - Search for `background: linear-gradient`
- **Button colors** - Look for `.answer-btn` or `.letterTile` styles
- **Fonts and sizes** - Modify `font-size` and `font-family` properties
- **Animations** - Adjust `@keyframes` definitions

## 📊 Data Structure Reference

### CD023 (Unscramble) Data Format
```javascript
{
    icon: "icWord",           // Icon CSS class
    letters: ["a","b","c"],   // Letters in CORRECT order
    preorder: ["2","1","3"]   // SCRAMBLED positions (1-indexed)
}
```

### CD013 (Which Letter) Data Format
```javascript
{
    icon: "icWord",
    letters: ["b","e","d"],
    blankSpot: "1",          // Which position is missing (1-indexed)
    answers: ["b","k","r"],   // Three answer choices
    correctSpot: "1"          // Which answer is correct (1-indexed)
}
```

### CD015 (Build a Word) Data Format
```javascript
{
    icon: "icWord",
    colors: ["Blue","Red","Green"],  // Color for each letter position
    letters: ["n","a","p"]           // Letters in correct order
}
```

## 🎨 Styling Features

All widgets include:
- **Responsive design** - Works on desktop and tablet screens
- **Smooth animations** - CSS transitions and keyframe animations
- **Visual feedback** - Color changes and movement for user actions
- **Accessibility** - High contrast colors and clear typography
- **Modern UI** - Gradient backgrounds, rounded corners, shadows

## 🔍 Technical Details

### Technologies Used
- **HTML5** - Modern semantic markup
- **CSS3** - Gradients, animations, flexbox, transitions
- **JavaScript (ES5)** - Compatible with older browsers
- **jQuery 3.6.0** - Loaded from CDN for DOM manipulation

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### File Structure
Each widget file contains:
1. **HTML structure** - Minimal DOM elements
2. **Embedded CSS** - All styles in `<style>` tag
3. **Embedded JavaScript** - All logic in `<script>` tag
4. **Sample data** - Example exercise content

No external files required (except jQuery from CDN).

## 📝 Notes for Developers

### Converting from Original Countdown Format

If you have JSON data files from the original Countdown application:

1. The data structure is compatible - just copy the `dataSet` array
2. Icon class names are the same (e.g., `icSit`, `icMap`)
3. Letter arrays and positioning work identically
4. You may need to adjust:
   - Font sizes (original uses em units based on different base size)
   - Positioning calculations (original is designed for full-screen)
   - Icon images (widgets use emoji, original uses image sprites)

### Extending the Widgets

To create new widget types:

1. Study the `TEMPLATE_DOCUMENTATION.md` for other template types (CD001-CD046)
2. Find the corresponding JavaScript function in the original `exercises.js`
3. Extract the rendering logic and adapt for standalone use
4. Create appropriate CSS styling
5. Define sample data following the documented structure

### Performance Considerations

These widgets are designed for:
- Small to medium datasets (5-20 items)
- Individual student use
- Modern browsers with hardware acceleration

For larger datasets or older devices, consider:
- Reducing animation complexity
- Simplifying visual effects
- Pre-loading content in batches

## 🆘 Troubleshooting

**Widget doesn't load:**
- Check that JavaScript is enabled in your browser
- Ensure you have an internet connection (for jQuery CDN)
- Try a different browser

**Icons don't display:**
- Some older systems may not support all emoji
- Consider replacing emoji with simple text or SVG icons

**Animations are choppy:**
- Reduce CSS transition durations
- Disable shadows and gradients for better performance
- Close other browser tabs

## 📚 Further Reading

For more information about the original Countdown curriculum:
- See the reference site at: `d:\Dropbox\OLT\~Drupal Versions\drp-countdownTX\`
- Review `TEMPLATE_DOCUMENTATION.md` for all template types
- Examine `indexDRUPAL.html` for the full application structure

## 🎓 Educational Use

These widgets are designed for:
- **Reading instruction** - Phonics and word building skills
- **Interactive learning** - Engaging, game-like activities
- **Self-paced practice** - Students can work independently
- **Assessment** - Track scores and progress

Suitable for:
- Elementary education (K-2)
- Reading intervention
- ESL/ELL instruction
- Homeschool curricula

## 📄 License

These widgets are recreations of the Countdown curriculum templates for educational purposes. Please refer to the original Countdown materials for licensing information.

---

**Created:** 2025
**Format:** Standalone HTML widgets
**Dependencies:** jQuery 3.6.0 (CDN)
**Status:** Ready to use - no installation required
