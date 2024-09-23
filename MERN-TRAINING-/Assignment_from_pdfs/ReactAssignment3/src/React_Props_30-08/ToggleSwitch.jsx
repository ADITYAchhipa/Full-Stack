// Q9.  Create a `ToggleSwitch` component. It should accept a `toggleState` prop which is a function. When the switch is clicked, it should call `toggleState` to update the parent component's state

import React from 'react';
import './ToggleSwitch.css';
const ToggleSwitch = ({ toggleState }) => {
  const handleToggle = () => {
    toggleState();
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id="toggleSwitch"
        onChange={handleToggle}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-button" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
