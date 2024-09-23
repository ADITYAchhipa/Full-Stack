// Q10.  Create a `TodoList` component that accepts an array of todos via props. Render each todo item in the list

import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
