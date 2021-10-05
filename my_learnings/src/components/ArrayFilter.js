import React from 'react';

const ArrayFilter= () => {
    const data=[
        {
          "name": "Bob",
          "gender": "Male",
          "age": 23,
          "pets": [{"name": "Garfield", "type": "Cat"}, {"name": "Fido", "type": "Dog"}]
        },
        {"name": "Jennifer", "gender": "Female", "age": 18, "pets": [{"name": "Garfield", "type": "Cat"}]},
        {"name": "Steve", "gender": "Male", "age": 45, "pets": null},
        {
          "name": "Fred",
          "gender": "Male",
          "age": 40,
          "pets": [
            {"name": "Tom", "type": "Cat"},
            {"name": "Max", "type": "Cat"},
            {"name": "Sam", "type": "Dog"},
            {"name": "Jim", "type": "Cat"}
          ]
        },
        {"name": "Samantha", "gender": "Female", "age": 40, "pets": [{"name": "Tabby", "type": "Cat"}]},
        {
          "name": "Alice",
          "gender": "Female",
          "age": 64,
          "pets": [{"name": "Simba", "type": "Cat"}, {"name": "Nemo", "type": "Fish"}]
        }
      ]
     const additionNumbers = (a,b) =>
             a+b;
    
    const filterGender =(data)=>{
        
       console.log(data.filter(x=> x.gender==="Female").map(y=>y.age).reduce((a,b)=>a+b));
      
      
        }

    
    filterGender(data)   
return<>
<div className ="bincy">The sum is: {}</div>
<div className ="test"><p>hi</p></div>
</>
}


export default ArrayFilter;