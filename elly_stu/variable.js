// 1.use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';   // 선언 되지않은 변수사용하면 브라우저에서는 되는데  이걸쓰면 에러 표시 


// 2. Variable, rw(read, write) (변수 변경될수있는 값)
// let은 (added in ES6)
let globalName ='global name';   //글로벌 네임은 가능 
{
    let name = 'hyoyeon';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
//블럭 밖에 작성하면  볼수 없음.
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting 호이스팅 (맨위로 선언이 올라감)
// has no block scope 블럭을 철저히 무시함
{
    age = 4;
    var age;
}
console.log(age);


// 3. constants (only read) 값은 선언동시에 할당하면 변경 못함.
// favor immutable data type always

const dayInWeek = 7;
const maxNumber = 5
//        !!!!Note!!!!
//Immutable data types: primitive types, frozen objects  ==const
//Mutable data types: all objects by default are mutable in JS  ==let
// -security 보안상
// - thread safety 값이 변하지 않게 
// - reduce human mistakes

// 4. Variable types
// primitive타입(더이상 작은것으로 나눌수 없음)= single item: number, string, boolean, 
//                                              null, undefiedn, symbol
// object= box container
// function= first-class function 

const count = 17; //int(eger) 정수
const size =17.4; // decimal numer 소수 
console.log(`value:${count}, type: ${typeof count}`); //둘다 타입은 number로 나옴 
console.log(`value: ${size}, type: ${typeof size}`);    //둘다 타입은 number로 나옴

//number - speicla numeric values
const infinity = 1/0; //숫자를 0으로 나누는거 infinity
const negativeInfinity = -1/0;  //-infinity
const nAn = 'not a number' / 2;  //숫자아닌걸 숫자로나누면 NaN
//연산전에 항상 그 값이 유효한지 잘 알기 
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//새로운 타입 추가 
//bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890n;  // 숫자 뒤에 n을 붙이면 됨.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string  한가지글자이던 여러글자이던 스트링임.
const char ='c';
const brendan ='brendan';
const greeting = 'hello' +brendan; //+로 뒤에 연결 가능
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(String) 백탭과 $(변수), 기호이용하면 자동으로 븉어 나옴 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0,null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3< 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null (너는 텅텅비어있는 값이야!!라고 지정)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined(선언은 되어있지만 값이 지정되어있지 않아서 비었는지 찼는지 모름 )
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol(고유한 식별자만들때  사용됨), create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) //-> false

const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`); //.description을 이용해서 스트링으로 변환후 출력하기!

//object, real-life object, data structure
const hyoyeon ={name: 'hyoyeon', age: 20};
hyoyeon.age = 22;

// 5. Dynamic typing: dynamically typed langyage

let text = 'hello';
console.log(text.charAt(0));  //h이 출력됨
console.log(`value: ${text}, typye:${typeof text}`);  //string
text =1;
console.log(`value: ${text}, typye:${typeof text}`);  //number
text = '7'+ 5;
console.log(`value: ${text}, typye:${typeof text}`);  //string 
text = '8' / '2';
console.log(`value: ${text}, typye:${typeof text}`);  //number
console.log(text.charAt(0)); 
