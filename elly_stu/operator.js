//1. String concatenation
console.log('my'+'cat');
console.log('1'+ 2);
console.log(`string literals:
''''' ;; 
1+2= ${1+2}`);

//2.numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2); //나머지
console.log(2**3); //exponentiation

//3. Increment and decrement operators
let counter =2;

const preIncrement = ++counter;
//counter =counter+1;
//preincrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement= counter++;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

//4. Assignment operators
let x=3;
let y=6;
x+=y;  // x=x+y;
x-=y;
x*=y;
x/=y;

//5. Comparison operators
console.log(10<6); //less than
console.log(10<=6); //less than or equal
console.log(10>6); //greater than
console.log(10>=6); // greater than or equal


//6.Logical operators : ||(or) , &&(and), !(not)
const value1 = true;
const value2 = 4<2;

// ||(or) , finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and) , finds the first falsy value
console.log(`and: ${value1 && value2 &&check()}`);

//often used to compress long ir-statement
//nullableobject && nullableobject.something

//if(nullobject != null) {
//    nullableobject.something;
//    }

function check() {
    for(let i=0; i<10; i++){
        //wasting time
        console.log('ㅇ0ㅇ');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const StringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(StringFive == numberFive); //t
console.log(StringFive != numberFive); //f

// ===strict equality, no type conversion //주로 이것을 사용 
console.log(StringFive === numberFive); //f
console.log(StringFive !== numberFive); //t

//object equality by reference
const ellie1= {name: 'ellie'};
const ellie2= {name: 'ellie'};
const ellie3= ellie1;
console.log(ellie1==ellie2); //f
console.log(ellie1===ellie2); //f
console.log(ellie1===ellie3); //t

//quiz@@@@
console.log(0 ==false); // t
console.log(0 ===false); //f
console.log("" ==false); //t
console.log("" ===false); //f
console.log(null == undefined); //t
console.log(null ===undefined); //f   

// 8. Conditional operators: if
//if, else if , else
const name= 'hy';
if(name === 'hy') {
    console.log('welcome, hyo');
} else if(name ==='coder'){
    console.log('you are amazing coder');
}else {
    console.log('unkwnon');
}

//9. Ternary operator :?
//condition ? value1 : value2;
console.log(name === 'hy' ? 'yes' : 'no' ); 

//10. swith 
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
let i=3;
while(i>0) {
    console.log(`while: ${i}`);
    i--;
}

do{
    console.log(`do while: ${i}`);
    i--;
}while (i>0);

for (i=3; i>0; i--){
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i-=2){
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// quiz 1. 0~10 짝수출력 continue
    for(let i=0; i<=10; i++){
        if(i%2 ===0){
            continue;
        }
        console.log(`q1. ${i}`);
    }

//2. 0~10 8만나면 break;
    for(let i=0; i<11; i++){
        if(i>8){
            break;
        }
        console.log(`q2. ${i}`);
    }