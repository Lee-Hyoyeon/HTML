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
const article1 = new Article(1);
const article2 = new Article(2);
//console.log(article1.publisher); //오브젝트 안에 publisher은 값을 몰라서 undefined로 나옴
console.log(Article.publisher);
//static은 (Article)클래스 자체에 붙어있음 
Article.printPublisher(); 


//5. 다형성
//Inheritance  상속
//a way for one class to extend another class
class Shape{
    constructor (width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{
}
class Triangle extends Shape{
    draw(){     //오버라이딩 
        super.draw(); //부모에 있는 draw함수 호출 
        console.log('🎁');
    }
    getArea() {   //다형성  //오버라이딩
        return (this.width * this.height) /2;
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());


const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//6.Class checking : instanceOf 
console.log(rectangle instanceof Rectangle); 
//rectangle이 오브젝트가 Rectangle클래스를 이용해서 만든건지아닌지!?
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); //오브젝트의 인스턴스이다! T

