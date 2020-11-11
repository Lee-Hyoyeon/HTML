//function
//기본적인 byilding block
//subprogram으로 불리며 여러번 재사용 가능
//한가지 task나 어떤 값을 계산하기위해 쓰여짐

/*1. function 
funtion name(param1, param2) {body...return; }
함수 nameing: dosomethig,command, verb 
하나의 함수는 한가지 일만하게 만듦
*/
function log(message){
    console.log(message);
}
log('hello#');  

/*2. parameters
    primitive parameters: 메모리에 value 그대로 전달
    object parameters:  메모리에 reference 전달
*/
function changeName(obj){
    obj.name ='coder';
}
const ellie= {name: 'ellie'};
changeName(ellie);
console.log(ellie);

/*3.default parameters(added in ES6)*/

function showMess(message, from='unknown'){  //from이 정의되지 않았을때 unknown나옴 
    console.log(`${message} by ${from}`);
}
showMess('hi','hyoyeon');

//4. rest parameters 
function printAll(...args){  //배열 형태로 전달 
    for(let i=0;i< args.length; i++){
        console.log(args[i]);
    }
    //배열 출력시 tip 1
    for(const arg of args){  //args에 있는값이 arg에 하나씩 지정되면서 출력
        console.log(arg);
    }
    //tip 2
    args.forEach((arg)=>console.log(arg));
}
printAll('dream','happy',"hyo");


//5.local scope (유리창 틴트)
let globalMess ='global'; //glabal variable 전역
function printMess(){
    let message ='hello';
    console.log(message); //local variable 지역 
    console.log(globalMess);
}
printMess( );

//6.return a value
function sum(a,b){
    return a+ b;
}
//const result = sum(1,2);
console.log(`sum : ${sum (1,2)}`);  //3

//7. early return , early exit (빨리 리턴해라 빨리 종료해라 지적)
//bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}
//good
function upgradeUser(user){
    if(user.point<=10 ){
        return;
    }
     //long upgrade logic... 조건이 맞을때만 필요한 로직을 실행하는게 좋음 
}

/*first-class function  
    can be assigned as a value to variable
    can be passed as an argument to ther functions
    can be returned by another function 
*/



/*1. function expression 
    a function declaration canbe called earlier than it is defiend.(hosted)
    a function expression is created when the execution reaches it
*/
const print= function( ){ //함수 선언 동시에 print에 할당 
    // 함수이름 없는거 anonymous function  (익명 함수?? )
    console.log('print#');
}
print( );
const printAgain = print;
printAgain();
const sumAgain= sum;
console.log(sumAgain(1,3));

//2. callback function using function expression
function randomQuiz(answer, printyes, printno){
    if(answer==="love you"){
        printyes(); 
    }else{
        printno();
    }
}
const printyes = function(){
    console.log("yes!");
}

//named function
const printno= function print(){
    console.log("no!");
}
randomQuiz("wrong",printyes, printno);
randomQuiz('love you', printyes, printno);

//Arrow function
//always anonymous
const simplePrint  = function(){
    console.log('simplePrint');
}
const simplePrint = () => console.log('simplePrint'); 