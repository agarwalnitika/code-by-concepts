# 🧠 Problem #1: Smart Search Input

## 🧾 Statement

You're building an infinite scrolling feed (like Twitter or Instagram), where more items load as the user scrolls down. However, to avoid performance issues, the "load more" function must be throttled — it should only run once every 500ms, no matter how fast the user scrolls.

Additionally, the data is fetched from a simulated queue of paginated results (DSA pattern), and appended to the existing list.

## 🎯 Requirements

- Display a scrollable list (use dummy data — say 100 items).
- Only the first N items (e.g., 10 or 20) should load initially.
- As you scroll to the bottom of the container:
- Load the next N items.
- Use a custom throttle() function to ensure it doesn’t call loadMore() too frequently.
- Show a loading spinner when new data is being appended.
- Disable further loading if no items are left in the queue.

## 🧪 Bonus (optional for later)

- Log how many times the loadMore() function was triggered.
- Extract your throttle(fn, delay) to a utility.
- Visually indicate when all items are loaded (e.g., “You’ve reached the end 🎉”).
- Support a retry mechanism if a simulated fetch fails (introduce 20% error chance).
- Use a Queue-like structure (e.g., array + .shift() in batches of N) to simulate paginated data.

// listfeeder - that displays the lists
