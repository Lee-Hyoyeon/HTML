// 1.use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read, write)
// let (added in ES6)
let globalName ='global name';
{
    let name = 'hyoyeon';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (맨위로 선언이 올라감)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. constants (only read)
// favor immutable data type always

const dayInWeek = 7;
const maxNumber = 5
//        !!!!Note!!!!
//Immutable data types: primitive types, frozen objects
//Mutable data types: all objects by default are mutable in JS 
// -security 보안상
// - thread safety 값이 변하지 않게 
// - reduce human mistakes

// 4. Variable types
// primitive(더이상 작은것으로 나눌수 없음)= single item: number, string, boolean, null, undefiedn, symbol
// object= box container
// function= first-class function

const count = 17; //int(eger)
const size =17.4; // decimal numer
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values
const infinity = 1/0; //숫자를 0으로 나누는거 infinity
const negativeInfinity = -1/0;  //-infinity
const nAn = 'not a number' / 2;  //Na
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//새로운 타입 추가 bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890n;  // n을 붙이면 됨.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string  하나든 여러개든 스트링임.
const char ='c';
const brendan ='brendan';
const greeting = 'hello' +brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (String)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0,null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3< 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)

const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);

//object, real-life object, data structure
const hyoyeon ={name: 'hyoyeon', age: 20};
hyoyeon.age = 22;

// 5. Dynamic typing: dynamically typed langyage
let text = 'hello';
console.log(text.charAt(0));  //h
console.log(`value: ${text}, typye:${typeof text}`);
text =1;
console.log(`value: ${text}, typye:${typeof text}`);
text = '7'+ 5;
console.log(`value: ${text}, typye:${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, typye:${typeof text}`);
//console.log(text.charAt(0)); //이거 모르겠어 ..
