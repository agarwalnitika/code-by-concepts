# 🧠 Problem #1: Smart Search Input

## 🧾 Statement

Create a search input field that calls a `search(query)` function — but only after the user has stopped typing for 400ms. This helps reduce unnecessary search calls on every keystroke.

## 🎯 Requirements

- Typing continuously should not trigger multiple calls.
- The `search(query)` function should be called once after typing stops.
- You can use vanilla JavaScript or React (your choice).
- `search(query)` can just `console.log("Searching for:", query)`.

## 🧪 Bonus (optional for later)

- Clear previous timer if user starts typing again.
- Make it reusable (i.e., hook or utility).
- Track number of times `search()` was called for debugging.

Approach:
// create and save search value via input
// if value changes, call the api/fetch sample data (with delay of 400ms after user stops typing)
// display matched queries
