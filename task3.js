
// 🟢 Task 1 - Employee Login Eligibility


let age = prompt("Employee Age?");
let id = confirm("Employee ID?");
let attendance = prompt("Your Attendance?");

if(age >= 18 && id == true && attendance >= 75) {
    console.log("Access Granted");
}
else {
    console.log("Access Denied");
    
}


// 🟢 Task 2 - Student Grade System


let marks = 82;
if(marks >= 90 && marks <= 100) {
    console.log("Grade A+");
}
else if(marks >= 80 && marks < 90) {
    console.log("Grade A");
}
else if(marks >= 70 && marks < 80) {
    console.log("Grade B");
}
else if(marks >= 60 && marks < 70) {
    console.log("Grade C");
}
else if( marks < 60) {
    console.log("FAIL");
}



// 🟢 Task 3 - ATM Withdrawal


let balance = 5000;
let withdraw = 4500;

if(withdraw <= balance && withdraw % 100 == 0) {
    balance = balance - withdraw;
    console.log("Transaction  Successful");
    console.log("Remaining Balance : " + balance);
}
else {
    console.log("Transaction Failed");
}


// 🟢 Task 4 - Food Ordering App


let order = 4;

switch(order) {
    case 1 :
        console.log(" You Ordered Pizza");
        break;
    case 2 :
        console.log("You Ordered Burger");
        break;
    case 3 :
        console.log("You Ordered Shawarma");
        break;
    case 4 :
        console.log("You Ordered Biryani");
        break;
    case 5 :
        console.log("You Ordered Juice");
        break;
    default :
        console.log("Choose the Correct order");
        break;
        
}


// 🟢 Task 5 - E-Commerce Discount


let purchase = 6000;

if(purchase > 5000) {
    discount = purchase * 20/100;
    finalPrice = purchase - discount;
    console.log("Original Price : " + purchase);
    console.log("Discount : " + discount);
    console.log("Final Price : " + finalPrice);
}
else {
    discount = purchase * 10/100;
    finalPrice = purchase - discount;
    console.log("Original Price : " + purchase);
    console.log("Discount : " + discount);
    console.log("Final Price : " + finalPrice);
}





// 🟢 Task 6 - Attendance Report


for(let a = 1; a <= 30; a++) {
    console.log("Day " + a + " Present");
    
}


// 🟢 Task 7 - Even Number Generator


for(let even = 1; even <= 100; even++) {
    if(even % 2 == 0) {
        console.log(even);
        
    }
}


// 🟢 Task 8 - Mobile Number Validation

let mobileNum = "6788921900";
if(mobileNum.length === 10 && "6789".includes(mobileNum[0])) {
    console.log("Valid Mobile Number"); 
}
else {
    console.log("Invalid Mobile Number");
    
}

// 🟢 Task 9 - Shopping Cart

let cart = ["Milk","Bread","Egg","Rice","Oil"];

console.log(cart[0]);
console.log(cart[cart.length-1]);
console.log(cart);


// 🟢 Task 10 - Employee Database


let employee = {
    name : prompt("Your Name"),
    salary : prompt("Your Salary"),
    department : prompt("Your Department"),
    experience : prompt("Your Experience")
}
console.log("Employee Name : " +employee.name);
console.log("Department : " +employee.department);
console.log("Experience : " + employee.experience);


//    🟢 Task 11 - Company ID Generator


let name = prompt("your Name?");
let id1 = prompt("your ID?");
let department = prompt("Your Department?");

console.log("Welcome " +name);
console.log("Your Employee ID is " +id1);
console.log("Your Department : " + department);


// 🟢 Task 12 - User Registration

let name1 = prompt("Enter Name : " );
let age1 = prompt("Enter Age : ");
let terms = confirm("Do You accept Terms?");

if(terms){
    alert("Registered Successfully");
}
else {
    alert("Registered Failed")
}

// 🟢 Task 13 - Salary Increment Calculator

let salary = 35000;

let increment = salary * 15 /100;

console.log("Old Salary : " + salary);
console.log("Increment Amount : " + increment);
console.log("New Salary : " + (salary + increment));



// 🟢 Task 14 - Restaurant Bill Generator


let burger = 150;
let pizza = 300;
let juice = 80;

let subTotal = burger + pizza + juice;
let gst = subTotal * 18 / 100;
let grand = subTotal + gst;

console.log("SubTotal : " + subTotal);
console.log("GST : " + gst);
console.log("Grand Total : " + grand);



// 🟢 Task 15 - Company Attendance Dashboard


let employee1 = {
    rahul : "Present",
    arun : "Absent",
    Kamal : "Present",
    priya : "Present",
    divya : "Absent"
}
let presentCount = 0;
let absentCount = 0;

for (let emp in employee1) {
    if (employee[emp] === "Present") {
        presentCount++;
        console.log("Employee Present: " + emp);
    } else {
        absentCount++;
        console.log("Employee Absent: " + emp);
    }
}

console.log("Total Present: " + presentCount);
console.log("Total Absent: " + absentCount);

// ⭐ Mini Project (Team Assignment)

let employees = [
  {
    id: 1,
    name: "Hari",
    salary: 30000,
    experience: 2
  },
  {
    id: 2,
    name: "Muthu",
    salary: 42000,
    experience: 1
  },{
    id: 3,
    name: "Ravi",
    salary: 55000,
    experience: 4
  }
];

let choice = Number(prompt(
`1. Add Employee
2. View Employees
3. Search Employee
4. Salary with Bonus
5. Experience Level
6. Delete Employee
7. Exit

Enter your choice`
));

switch (choice) {

  // 1. Add Employee
  case 1:
    let id = Number(prompt("Enter ID"));
    let name = prompt("Enter Name");
    let salary = Number(prompt("Enter Salary"));
    let experience = Number(prompt("Enter Experience"));

    employees.push({
      id: id,
      name: name,
      salary: salary,
      experience: experience
    });

    console.log("Employee Added");
    console.log(employees);
    break;

  // 2. View Employees
  case 2:
    for (let emp of employees) {
      console.log(emp);
    }
    break;

  // 3. Search Employee
  case 3:
    let searchId = Number(prompt("Enter Employee ID"));

    for (let emp of employees) {
      if (emp.id === searchId) {
        console.log(emp);
      }
    }
    break;

  // 4. Salary with Bonus
  case 4:
    let bonusId = Number(prompt("Enter Employee ID"));

    for (let emp of employees) {
      if (emp.id === bonusId) {
        let total = emp.salary + (emp.salary * 10 / 100);
        console.log("Salary:", emp.salary);
        console.log("Bonus Salary:", total);
      }
    }
    break;

  // 5. Experience Level
  case 5:
    let expId = Number(prompt("Enter Employee ID"));

    for (let emp of employees) {
      if (emp.id === expId) {
        if (emp.experience >= 5) {
          console.log("Senior Employee");
        } else {
          console.log("Junior Employee");
        }
      }
    }
    break;

  // 6. Delete Employee
  case 6:
    let deleteId = Number(prompt("Enter Employee ID"));

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === deleteId) {
        employees.splice(i, 1);
      }
    }

    console.log("Employee Deleted");
    console.log(employees);
    break;

  // 7. Exit
  case 7:
    console.log("Thank You");
    break;

  default:
    console.log("Invalid Choice");
}









