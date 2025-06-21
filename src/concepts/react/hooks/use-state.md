# Hook: UseState

## Syntax

```
const [count, setCount] = useState(0);
```

React:

- Registers a state variable for that component instance.
- Stores the state internally in a fiber node (React's internal structure for a component).
- Links that state to the correct position in the component tree (order matters!).
- Returns the current state (count) and a setter function (setCount).

```
setCount(1);
```

React:

- Triggers a state update
  setCount schedules an update task in React's internal queue.

- React does not immediately change the state or re-render.

- Batches updates
  If called inside event handlers (onClick, useEffect, etc.), React may batch multiple setState calls to optimize re-rendering.

- Marks component as "dirty"
  React marks this component as needing a re-render in the next reconciliation cycle

### 🔄 Then Comes Reconciliation (Virtual DOM Phase)

- Key Steps:
- Re-render the component:

- React calls your component function again, replacing the previous render.
- All useState, useEffect, etc. are run in order (must be consistent across renders).
- Creates a new Virtual DOM tree for this component.
- Diffs the new virtual DOM against the previous one:
- This is called the "diffing algorithm".
- React calculates the minimal changes needed to update the real DOM.
- Commits changes to the real DOM (if any).
