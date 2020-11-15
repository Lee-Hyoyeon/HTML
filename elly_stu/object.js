//object
/*
one of the JavaScript's data types
a collection of related data and/of functionality
Nearly all objects in JavaScript are instances of object
**오브젝트는 key 와 value의 집합체 이다**
*/
/*
const name ="hyo";
const age= 4;
print(name,age);
function print(name,age){
    console.log(name);
    console.log(age);
}  //인자값이 많아 지면 추가할것이 많아져서 !Bad!
*/
//<오브젝트 만드는 방법 2가지>
const obj1={}; //object literal
const obj2= new Object(); //object constructor

//1.Literals and properties 
function print(person){
    console.log(person.name);
    console.log(person.age);
}
const hyo ={name: "hyoyeon", age: 22}; // 오브젝트로 관리 함
print(hyo);

hyo.hasJob=true; // 중간에 추가가능하지만 쓰지 말기
console.log(hyo.hasJob);

//2.computed properties (계산된속성)
//key should be always string 
console.log(hyo.name);  
console.log(hyo['name']);  
hyo['hasJob']= false; 
console.log(hyo.hasJob);

function printValue(obj, key){
    console.log(obj[key]);  //obj.key로 하면 들어있는 값이 없어서 undefined
}
printValue(hyo,'name');
printValue(hyo,'age');

//3.Property value shorthand
const p1= {name: 'bob', age: 2};
const p2= {name: 'stev', age: 7};
const p3= {name: 'dave', age: 6};
const p4= new Person('lala', 22);  
console.log(p4);

//4.Constructor function 
function Person(name,age){     //class같은 아이
    this.name= name;
    this.age= age;
}
//5. "in" operator: property existence check (key in obj)
//해당obj안에 key가 있는지 확인 

console.log('name' in hyo);  //t
console.log('random' in hyo);  //f
console.log(hyo.ran);  //undefined 

//6. for..in  vs for..of 
//for (key in obj)
//console.clear();  //이전 콘솔내용 삭제 
for(key in hyo){
    console.log(key);
}

//for (value of iterable)
const array =[1,2,3,5];
for(value of array){
    console.log(value);
}

//7.Fun cloning
//object.assign(dest, [obj1, obj2, obj3...])
const user ={ name : 'hyoyeon', age: '22'};
const user2 = user;
user2.name = '코딩';
console.log(user);

//old way
const user3 ={};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

const user4 ={};
Object.assign(user4, user);  //user4에 user을 복사  
//const user4= Object.assign({}, user); 로 작성 가능 
console.log(user4);

const fruit1 = { color : 'red'};
const fruit2={color:'blue', size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color); //blue 맨뒤에 있는게 덮어버림.
console.log(mixed.size);  //big

