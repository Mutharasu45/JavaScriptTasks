// Task 1: Employee Salary Dashboard
// Concepts: map(), filter(), reduce(), find()
// Scenario:
// A company has employee details.
// Requirements:
// •	Display all employee names using map().
// •	Show employees with salary greater than ₹50,000 using filter().
// •	Find the first employee whose salary is above ₹1,00,000 using find().
// •	Calculate the total salary expense using reduce().


let employee = [
    {name : "Muthu", id : 1, salary : 50000 },
    {name : "Ajai", id : 2, salary : 30000 },
    {name : "Ravi", id : 3, salary : 120000 },
    {name : "Kumar", id : 4, salary : 150000 }
]
// map() - print only name
let mapVal = employee.map(x => x.name);
console.log(mapVal);

// filter -  > 50000
let filterVal = employee.filter((c)=>{
    return c.salary > 50000;
})
console.log(filterVal);

// find
let findVal = employee.find((c) => {
    return c.salary > 100000;
})
console.log(findVal);
// reduce 
let reduceVal = employee.reduce((acc,c) => acc + c.salary, 0);
console.log(reduceVal);


// Task 2: E-Commerce Cart Management
// Concepts: Spread Operator, Rest Operator
// Scenario:
// A customer adds products to their shopping cart.
// Requirements:
// •	Merge two product arrays using the spread operator.
// •	Add a new product while keeping the original array unchanged.
// •	Create a function checkout(...products) using the rest operator.
// •	Print total number of products received.


// spread operator - merge Array
let electronics = ["Laptop", "Mouse", "Keyboard"];
let accessories = ["Headphones", "Webcam"];

let merge = [...electronics, ...accessories];
console.log("Merge Array : ", merge);

// Add a new product 
let addProduct = [...merge, "Mobile", "TV"];

console.log("Add Product :", addProduct);

//  Rest Operator
function checkout(...products) {
    console.log("Products : ", products);
    console.log("Products Length : ", products.length); 
}
checkout("vivo", "oppo", "realme", "onePlus");


// Task 3: Student Report Card
// Concepts: Object Destructuring, Array Destructuring
// Scenario:
// A school stores student details.
// Requirements:
// •	Extract name, department, and marks using object destructuring.
// •	Extract the first three subject marks using array destructuring.
// •	Print:
// o	Student Name
// o	Department
// o	Total Marks
// o	Average Marks

// Student Object
let student = {
    name: "Mutharasu",
    department: "Maths Biology",
    marks: [85, 90, 88]
};

// Object Destructuring
let { name, department, marks } = student;
console.log("Student Nmae : " , name);
console.log("Department : ", department);

// total Marks
let [subMark1, subMark2, subMark3] = marks;
let totalMark = subMark1 + subMark2 + subMark3;
console.log("Total Marks : ",totalMark);

//  Average Marks
let averageMark = totalMark / marks.length;
console.log("Average Mark : ", averageMark);


// Task 4: Product Search System
// Concepts: String Methods
// Scenario:
// Users search for products on an online shopping website.
// Requirements:
// •	Remove extra spaces using trim().
// •	Convert search text to lowercase.
// •	Check whether the product contains the search keyword using includes().
// •	Highlight the searched word using replace().

// Remove Space
let str = " Mutharasu ";
console.log(str.trim());

// Convert LowerCase
console.log(str.toLocaleLowerCase());

// includes
console.log(str.includes("th"));

// replace
console.log(str.replace("arasu", "upandi"));

// Task 5: Movie Collection Manager
// Concepts: Array Methods
// Scenario:
// A movie streaming platform manages its movie list.
// Requirements:
// •	Add new movies using push().
// •	Remove the last movie using pop().
// •	Remove the first movie using shift().
// •	Add a featured movie at the beginning using unshift().
// •	Replace one movie using splice().
// •	Sort movie ratings in descending order.
// •	Check whether a movie exists using includes().

let movie = ["Mankatha", "Billa", "Vedalam", "AK"];

// push
movie.push("Veeram", "GBU");
console.log("Push Movie : ", movie);

// pop
movie.pop();
console.log(movie);

// shift
movie.shift();
console.log(movie);

// unShift
movie.unshift("AARAMBAM")
console.log(movie);

// splice
movie.splice(2,1, "leo")
console.log(movie);

// dissending Order
let rating = [7.8, 9.0, 8.8, 6.5, 7.6, 8.9];
rating.sort().reverse();
 console.log(rating);

// Check whether a movie exists using includes().

let existsMovie = "leo";

if(movie.includes(existsMovie)) {
    console.log("Esists Movie : ", existsMovie); 
}
else {
    console.log("Does not Exists Movie : ", existsMovie);
    
}


 











