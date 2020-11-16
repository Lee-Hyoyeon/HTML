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
fruits.forEach(function(fruit, index){
    console.log(fruit,index);
});
//fruits.forEach((fruit)=> console.log(fruit));

//4.addtion , deletion, copy
//push:  add an item to the end
fruits.push("🍤");
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift:  add an item to the 앞에서부터 데이터 넣음
fruits.unshift("딸기","레몬");
console.log(fruits);

//shift: remove an item from the begining  뺌
fruits.shift();
console.log(fruits);

//***shift , unshift are slower than pop,push***


//splice: remove an item by index position
fruits.shift();
fruits.push("🍬","🍭","🍯");
console.log(fruits);
fruits.splice(1,2);  //시작 index부터 몇개 지울건지 ,뒤에 추가할거 적기
console.log(fruits);

//두개 배열 합치기 
const fruits2=['하나','둘'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. 검색하기
//find the index
console.log(fruits.indexOf("🍬"));  //번지로 위치를 알려줌
console.log(fruits.includes("🍟")); //포함하고 있는지
console.log(fruits.indexOf("라라"));  //없는것은 -1표기 

//lastIndexof
fruits.push("🍟");
console.log(fruits.indexOf("🍟"));
console.log(fruits.lastIndexOf("🍟")); //같은 값이 2개 있을때 마지막것 위치 

