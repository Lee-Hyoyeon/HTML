'use strict';

// Q1. make a string out of an array   //배열을 문자열로
{
    const fruits = ['apple', 'banana', 'orange'];
    const result= fruits.join("&");   //  join
    console.log(result);
}

  // Q2. make an array out of a string  //문자열을 배열로 
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const re=fruits.split(",");      //split
    console.log(re);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]  
  //배열을 거꾸로
{
    const array = [1, 2, 3, 4, 5];
    let result=array.reverse();  
    console.log(result);
    console.log(array);  //배열 자체를 변환시킴.

}
    
  // Q4. make new array without the first two elements
{//앞에 두개 빼고 새로운 배열 만들기
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5) ;//배열의 특정부분 리턴 index 2~4까지 
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
    
}

  // Q6. make an array of enrolled students
{
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
}

  // Q8. check if there is a student with the score lower than 50
{
}

  // Q9. compute students' average score
{
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
}