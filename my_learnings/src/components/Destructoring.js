import React from 'react';
import {useState} from 'react';

function Destructoring(){
    const [count, setCount] =useState(0)
    return (
        <>
        <p>you clicked {count} times</p>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
        </>
    )
}

export default Destructoring;