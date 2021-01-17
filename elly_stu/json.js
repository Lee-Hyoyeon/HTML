//JSON 
//JavaScript Object Notation 자바스크립트 파일과 관련된 것 

//1. Object to JSON
//stringify 직렬화 
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);     //배열타입처럼 보이면서 "" 로 나옴 ->json의 규격사항이다.
console.log(json);

const rabbit={
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {     //함수는 obj에 있는 데이터가 아니므로 제외됨 
        console.log(`${this.name} can jump!!`);
    }
}
json=JSON.stringify(rabbit); //토끼 오브젝트를 json으로 변환 
console.log(json);

                            //replacer 함수 형태혹은 배열형태  
json=JSON.stringify(rabbit,['name','color','size']);  // 원하는 속성만 골라서 정의하면 이것만 나옴 
console.log(json);

//call back 함수
json=JSON.stringify(rabbit,(key, value)=>{
    console.log(`key: ${key}, value:${value} `);
    return key ==='name'? 'hyo' : value;
});
console.log(json);


//2.JSON to Object 제이슨을 오브젝트로 변환 
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





















