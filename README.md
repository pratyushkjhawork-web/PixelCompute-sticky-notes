# Sticky Notes 📝

A simple, responsive Sticky Notes application built using **HTML, CSS, and JavaScript** as part of my **PixelCompute Bootcamp**, following **BigBinary Academy Chapter 27**.

The project allows users to create and delete sticky notes through an interactive dashboard. It focuses on practising DOM manipulation, browser events, and CSS styling.

## ✨ Features

- **Add Notes:** Create new notes using the `+` button.
- **Delete Notes:** Remove individual notes using the `×` button.
- **Alternating Colors:** Notes alternate between blue (`#d1e1ff`) and off-white (`#fefffe`) backgrounds.
- **Empty State:** Displays a message when there are no notes.
- **Input Validation:** Prevents empty or whitespace-only notes.
- **Responsive Design:** Adapts to smaller screens.
- **Interactive Styling:** Includes hover effects, shadows, and focus states.

## 🛠️ Tech Stack

- **HTML5:** Application structure and input form.
- **CSS3:** Styling, layout, colors, shadows, animations, and responsive design.
- **JavaScript:** Dynamic note creation, deletion, and event handling.
- **Google Fonts:** DM Serif Text for the heading.

## 📚 Concepts Learned

This project helped me practise the following concepts:

- DOM selection using `document.querySelector()`
- Creating elements with `document.createElement()`
- Event handling with `addEventListener()`
- Handling form submissions using `event.preventDefault()`
- Manipulating CSS classes with `classList`
- Adding elements using `append()` and `prepend()`
- Removing elements using `remove()`
- Reading and resetting input values
- CSS Grid and media queries
- Box shadows, background colors, and hover transitions

## 🚀 How to Run

No additional packages or build tools are required.

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.

Alternatively, open the folder in VS Code and run:

```powershell
start index.html
```

An internet connection is required to load the Google Font. The application itself runs locally.

## 📂 Project Structure

```text
sticky-notes/
├── index.html
├── style.css
└── script.js
```

## ⚠️ Current Limitations

Notes are stored only in the current page session. Refreshing the browser clears the notes because persistent storage is not implemented.

## 🎓 Bootcamp Information

- **Program:** PixelCompute Bootcamp
- **Course:** BigBinary Academy JavaScript
- **Chapter:** 27
- **Project:** Sticky Notes

This project is part of my ongoing bootcamp journey, where I am applying JavaScript fundamentals by building practical projects.

---

*Built as part of my JavaScript learning journey at PixelCompute Bootcamp.*
