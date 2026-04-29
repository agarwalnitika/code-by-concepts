import React, { useState } from "react";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  children: Todo[];
};

const initialData: Todo[] = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
    children: [
      {
        id: "1.1",
        title: "Subtask 1.1",
        completed: false,
        children: [
          {
            id: "1.1.1",
            title: "Subtask 1.1.1",
            completed: false,
            children: [],
          },
        ],
      },
      { id: "1.2", title: "Subtask 1.2", completed: false, children: [] },
    ],
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    children: [],
  },
];

export default function TreeTodoWithStrictCheckboxes() {
  const [todos, setTodos] = useState<Todo[]>(initialData);

  const toggleTodo = (id: string) => {
    // Step 1: toggle node + children
    const updated = toggleAndPropagate([...todos], id);
    // Step 2: update parent completion state
    const final = updateParentCompletion(updated);
    setTodos(final);
  };

  const toggleAndPropagate = (list: Todo[], id: string): Todo[] => {
    return list.map((todo) => {
      if (todo.id === id) {
        const newCompleted = !todo.completed;
        return {
          ...todo,
          completed: newCompleted,
          children: toggleChildren(todo.children, newCompleted),
        };
      }
      return {
        ...todo,
        children: toggleAndPropagate(todo.children, id),
      };
    });
  };

  const toggleChildren = (children: Todo[], completed: boolean): Todo[] => {
    return children.map((child) => ({
      ...child,
      completed,
      children: toggleChildren(child.children, completed),
    }));
  };

  const updateParentCompletion = (list: Todo[]): Todo[] => {
    const walk = (todos: Todo[]): [Todo[], boolean] => {
      const updated = todos.map((todo) => {
        const [updatedChildren, allChildrenComplete] = walk(todo.children);
        const completed =
          updatedChildren.length > 0 ? allChildrenComplete : todo.completed;
        return {
          ...todo,
          completed,
          children: updatedChildren,
        };
      });
      const allComplete = updated.every((todo) => todo.completed);
      return [updated, allComplete];
    };
    const [newList] = walk(list);
    return newList;
  };

  const renderTree = (list: Todo[]) => (
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
          </label>
          {todo.children.length > 0 && renderTree(todo.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Tree Todo with Strict Completion</h2>
      {renderTree(todos)}
    </div>
  );
}
