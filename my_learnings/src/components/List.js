import React from 'react';


const myLists = ['A', 'B', 'C', 'D', 'D'];

 const List=() =>{
  
const numberList = myLists.map(num =>
num
);

    return <ul>
        {numberList}
    </ul>
}



export default List;