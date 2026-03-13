//ASSIGNMENT 3:
//-------------
//Employee Payroll Processor

//You are building a salary processing module in a company HR app.

//Test data:
//const employees = [
  //{ id: 201, name: "Amit", salary: 45000, department: "IT" },
  //{ id: 202, name: "Neha", salary: 60000, department: "HR" },
  //{ id: 203, name: "Rahul", salary: 75000, department: "IT" },
  //{ id: 204, name: "Pooja", salary: 30000, department: "Sales" }
//];

//Tasks:
  //  1. filter() employees from IT department
    //2. map() to add:
      //      netSalary = salary + 10% bonus

   // 3. reduce() to calculate total salary payout
    //4. find() employee with salary 30000
    //5. findIndex() of employee "Neha"

    const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1 IT employees
const itEmployees = employees.filter(e => e.department === "IT");

//2 add bonus
const salaryWithBonus = employees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.10
}));

//3 total payout
const totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);

//4 find salary 30000
const employee30000 = employees.find(e => e.salary === 30000);

//5 findIndex Neha
const nehaIndex = employees.findIndex(e => e.name === "Neha");

console.log(itEmployees);
console.log(salaryWithBonus);
console.log(totalSalary);
console.log(employee30000);
console.log(nehaIndex);