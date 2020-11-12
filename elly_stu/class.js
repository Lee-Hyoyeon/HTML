'use strict'
/*템플릿에 속함 */

//1. class declarations (선언) 
class Person{
    constructor(name,age){ 
        //fields
        this.name = name;
        this.age= age;
    }
    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age); 
ellie.speak();  // ellie: hello!

//2. getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
    }
    get age(){
        return this._age;
    }

    set age(value){  //새로운 값을 받으면 
        this._age=value <0 ? 0: value;  //나이가 음수이면 0 
    }
}

const user1 = new User('hyo','yeon',-1);
console.log(user1.age);


//3.Fields (public,private)
//too soon!
class Experiment{
    publicField = 2;
    #privateField=0;
}
const experiment = new Experiment();
console.log(experiment.publicField);  //2
console.log(experiment.privateField);  //undefined

//4. static properties and methods
class Article{ 
    static publisher = 'Dream Coding'; 
    constructor (articleNumber){ 
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
