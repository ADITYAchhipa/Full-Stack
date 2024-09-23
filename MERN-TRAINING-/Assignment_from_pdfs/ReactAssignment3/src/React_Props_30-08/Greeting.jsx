import React from "react";


// Q1. Create a functional component called `Greeting` that accepts a `name` prop and displays a greeting message, e.g., 'Hello, [name]!'

function Greeting({name}){
    console.log(name);
    
    return(
        <div>
            <h1>Hello, {name}!</h1>
        </div>
)}

export default Greeting;