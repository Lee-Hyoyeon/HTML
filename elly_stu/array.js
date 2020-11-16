'use strict';


//1.Declaration
const arr1= new Array();
const arr2= [1,2];

//2.Index positon
const fruits=["🍟","🍕","🥨"];
console.log(fruits);
console.log(fruits[fruits.length-1] );  //마지막값 받아오기
console.log(fruits[0]);

//3.Looping over an array
//print all fruits  ((for of))
for(let fruit of fruits){
    console.log(fruit);
}


//forEach
fruits.forEach(function(){
    console.log('he');
});