# Generics

- Generics let you write flexible, reusable functions, classes, and components that work with any data type — while still keeping the benefits of TypeScript type checking.

## Why use generics

Without generics, you'd either:

- Use any — which disables type checking
- Hardcode a type — which limits reusability

**Generics = Reusability + Type Safety**

## Example

```
function identity<T>(item: T): T {
  return item;
}

const str = identity<string>("Hello"); // "Hello"
const num = identity<number>(42);      // 42

// You could even let TypeScript infer it
const inferred = identity("inferred"); // Type is string
```

Here, **T** is a placeholder for "any function you pass in"
It lets TypeScript preserve the original function's type signature, so that when you debounce it, you don't lose the function's parameter types.
