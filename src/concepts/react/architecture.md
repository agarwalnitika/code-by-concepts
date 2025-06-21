🔬 Under the Hood: Fiber and Hooks
React’s rendering engine is called the Fiber architecture.

When a component renders:
React creates or updates a fiber object (a JavaScript object that represents the component instance).

Each fiber has a linked list of hook objects, one for each useState, useEffect, etc.

React internally uses a global pointer called currentlyRenderingFiber to track which component is being rendered.
