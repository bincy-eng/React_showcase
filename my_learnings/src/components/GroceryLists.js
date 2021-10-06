import React from 'react';
import {useState} from 'react';

//Array and objects

const Grocery=[
    {item: "Apple", Price:25, category: "fruits"},
    {item: "pineapple", Price:35, category: "fruits"},
    {item: "Mangos", Price:15, category: "fruits"},
    {item: "Milk", Price:20, category: "Misc"},
    {item: "Eggs", Price:5, category: "Misc"},
];

function GroceryList(){
 const [{item} ,...rest]=Grocery;
    return<div>Name of the fruit:
       {console.log(item)}
        </div>
}


export default GroceryList;