import React, { useState } from 'react';
// import Greeting from "./React_Props_30-08/Greeting.jsx"
// import ProfileCard from "./React_Props_30-08/ProfileCard.jsx"
// import StatusMessage from "./React_Props_30-08/StatusMessage.jsx"
// import Counter from "./React_Props_30-08/Counter.jsx"
// import LikeButton from "./React_Props_30-08/LikeButton.jsx"
// import Timer from "./React_Props_30-08/Timer.jsx"
// import ColorPicker from "./React_Props_30-08/ColorPicker.jsx"
// import TextInput from "./React_Props_30-08/TextInput.jsx"
// import ToggleSwitch from "./React_Props_30-08/ToggleSwitch.jsx"
// import TodoList from "./React_Props_30-08/TodoList.jsx"
// import ProductCardList from "./React_FetchAPI_31-08/ProductCardList.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './React_ContextAPI_02-09/context/Provider.jsx';
import ProductCardList from "./React_ContextAPI_02-09/ProductCardList.jsx"

export default function App(){

  // const [selectedColor, setSelectedColor] = useState('#fff');

  // const handleColorChange = (newColor) => {
  //   setSelectedColor(newColor);
  // };

  // const [inputValue, setInputValue] = useState('');

  // const handleTextChange = (newText) => {
  //   setInputValue(newText);
  // };

  // const [isToggled, setIsToggled] = useState(false);

  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  // };

  // const todos = ['Learn React', 'Build an App'];

  return(
    <div>
    {/* React Day1 */}

    {/* <Greeting name="Kanishk"/>
    <ProfileCard name="Kanishk Gupta" age={20} location="Udaipur" /> */}
    {/* <StatusMessage status="success" />
    <StatusMessage status="error" /> */}
    {/* <Counter /> */}
    {/* <LikeButton likeCount={0} /> */}
    {/* <Timer start={5} /> */}
    {/* <h1>Selected Color: {selectedColor}</h1>
    <ColorPicker color={selectedColor} onColorChange={handleColorChange} /> */}
    {/* <h1>Current Input: {inputValue}</h1>
    <TextInput onTextChange={handleTextChange} /> */}
    {/* <h1>Toggle Switch is {isToggled ? 'ON' : 'OFF'}</h1>
    <ToggleSwitch toggleState={handleToggle} /> */}
    {/* <h1>My Todo List</h1>
    <TodoList todos={todos} /> */}
    

      {/* React Day2 */}

      {/* <ProductCardList /> */}


      {/* React Day3 */}

      <ProductProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/productList" element={<ProductCardList />} />
            {/* Add more routes as needed */}
          </Routes>
      </BrowserRouter>
    </ProductProvider>

    </div>
  )}