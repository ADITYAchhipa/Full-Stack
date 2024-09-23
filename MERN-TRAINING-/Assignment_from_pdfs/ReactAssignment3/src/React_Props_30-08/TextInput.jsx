// Q8.  Build a `TextInput` component with an input field. Use `useState` to control the input's value, and pass the current value back to the parent component using a prop

import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    onTextChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
    />
  );
};

export default TextInput;
