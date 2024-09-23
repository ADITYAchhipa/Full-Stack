// Q7. Create a `ColorPicker` component that allows the user to select a color. Pass a callback function via props to update the selected color in the parent component's state

import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, onColorChange }) => {
  const handleChange = (color) => {
    onColorChange(color.hex);
  };

  return (
    <div>
      <SketchPicker color={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
