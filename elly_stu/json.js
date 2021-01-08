//JSON 
//JavaScript Object Notation

//1. Object to JSON
//stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);     //배열타입처럼 보이고 "" 로 나옴 ->json의 규격사항
console.log(json);

const rabbit={
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),

    jump: () => {   //함수에서는 제외됨 
        console.log(`${this.name} can jump!!`);
    }
}
json=JSON.stringify(rabbit);
console.log(json);

json=JSON.stringify(rabbit,['name','color','size']);
console.log(json);

json=JSON.stringify(rabbit,(key, value)=>{
    console.log(`key: ${key}, value:${value} `)
    return key ==='name'? 'hyo' : value;
})
console.log(json);


//2.JSON to Object
//parse(json)
json=JSON.stringify(rabbit);
const obj=JSON.parse(json, ( key,value )=>{   //reviver 콜백 함수? 
    console.log(`key: ${key}, value: ${value}`);
    return key=== 'birthDate'? new Date(value): value;
});
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());





















