//ASSIGNMENT 2:
//-------------
//Student Performance Dashboard

//You are working on a college result analysis system.

//Test Data:
//const students = [
  //{ id: 1, name: "Ravi", marks: 78 },
  //{ id: 2, name: "Anjali", marks: 92 },
  //{ id: 3, name: "Kiran", marks: 35 },
  //{ id: 4, name: "Sneha", marks: 88 },
  //{ id: 5, name: "Arjun", marks: 40 }
//];

//Tasks:
  //  1. filter() students who passed (marks ≥ 40)
   // 2. map() to add a grade field
     //         ≥90 → A
       //       ≥75 → B
         //     ≥60 → C
           //   else → D

   //3. reduce() to calculate average marks
   //4. find() the student who scored 92
   //5. findIndex() of student "Kiran"

   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter passed students
const passedStudents = students.filter(s => s.marks >= 40);

//map grade
const gradedStudents = students.map(s => {
  let grade;

  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 60) grade = "C";
  else grade = "D";

  return { ...s, grade };
});

//average marks
const avgMarks = students.reduce((total, s) => total + s.marks, 0) / students.length;

//find marks 92
const topper = students.find(s => s.marks === 92);

//findIndex Kiran
const kiranIndex = students.findIndex(s => s.name === "Kiran");

console.log(passedStudents);
console.log(gradedStudents);
console.log(avgMarks);
console.log(topper);
console.log(kiranIndex);