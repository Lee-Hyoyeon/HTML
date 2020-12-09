'use strict';

// Q1. make a string out of an array   //배열을 문자열로 만들기 
{
    const fruits = ['apple', 'banana', 'orange'];
    const result= fruits.join(" & ");   // 고분자를 넣지 않으면 ,로 연결 
    console.log(result);
}

  // Q2. make an array out of a string  //문자열을 배열로 만들기
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const re=fruits.split(",",3);      //split 고분자를 안써주면 인덱스하나에 다 들어감?
    console.log(re);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]  
  //배열을 거꾸로 바꿀때 사용 
{
    const array = [1, 2, 3, 4, 5];
    let result=array.reverse();  
    console.log(result);
    console.log(array);  //배열 자체를 변환시킴.

}
    
  // Q4. make new array without the first two elements
{//앞에 두개 빼고 새로운 배열 만들기
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(3,4+1) ;//배열의 특정부분 리턴 index 1~4까지 
    //split은 배열 자체를 수정하기 때문에 사용 x
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90
{             
    const result= students.find(function(student){  //콜백함수를 만들어서 전달해야함 
        return student.score===90;
    }); 
    console.log(result); 
}             
{   //간단하게 쓰는 방법 
    const result= students.find((student)=> student.score==90); 
    console.log(result);
}

  // Q6. make an array of enrolled students 
{ 
    const result= students.filter(function(students){ //true만 리턴 
        return students.enrolled;
    })
    console.log(result);
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
    const result= students.map(function(student){ //배열안에 있는 요소들을 원하는 함수를 이용하여 다른 방식의 데이터를 만들고싶을때 사용!
        return student.score ;  
    } )       
    console.log(result);
}

  // Q8. check if there is a student with the score lower than 50
{
    const result= students.some((student)=>student.score<50);
    console.log("50미만 성적이있는지"+result);    // 50미만 성적이 한명이라도 있으면 t

    const result2= students.every((student)=>student.score<50);
    console.log(result2);
    //모두가 조건을 갖춰야 할때 사용 .  모두가 50보다 낮은건 아니니까 F

}

  // Q9. compute students' average score 학생들의 평균점수 
{
  const result = students.reduce((prev,curr)=> {   //reduceRight 순서가 거꾸로 호출(배열 맨뒤부터 )
      console.log(prev);
      console.log(curr );
      return prev+ curr.score ;

  },0 );   // 이니셜 값이 0부터 시작
  console.log(result/students.length);

//prev value 는 이전에 콜백함수에서 리턴된 값이 전달
//curr은 배열의 아이템을 순차적으로 전달 받는다 

  //간단하게 하는 법
  /* const result = students.reduce((prev,curr)=> prev+ curr.score ,0 );  
    console.log(result/ students.length);
   */

  
}

  // Q10. make a string containing all the scores  학생들의 모든점수를 스트링으로 변환
  // result should be: '45, 80, 90, 66, 88'
{ 
  const result = students 
    .map((student)=> student.score) 
    .filter((score)=> score >=50)
    .join();      //배열자체를 리턴하기때문에 섞어서 호출 가능
  
  console.log(result);

}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90' 
{
  const result = students
    .map((student)=>student.score)
    .sort((a,b)=> a - b )   //학생 a,b를 전달할때 b가 a 보다 크다면 마이너스 value 니까 원하는데로 sorting 되겠구나?!
    .join();                // 점수를 큰순서 대로 하려면 b - a라고 적음

    console.log(result);
}