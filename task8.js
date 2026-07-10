// Task 1: Employee Age Calculator
// Scenario:
// An HR portal stores employees' Date of Birth. Display their current age.
// Requirements:
// •	Create a DOB using new Date()
// •	Use getFullYear()
// •	Calculate current age
// •	Print:
// Employee Age: 24 Years

let empDOB = new Date("12-5-2000");

let currentDate = new Date();
let empDOBYear = empDOB.getFullYear();
let currentDateYear = currentDate.getFullYear();

let age = currentDateYear - empDOBYear;
console.log("Employee Age : " , age , "Years");


// Task 2: Online Appointment Scheduler
// Scenario:
// A hospital wants to reschedule an appointment.
// Requirements:
// •	Create today's date.
// •	Change the appointment to:
// o	Year → 2027
// o	Month → December
// o	Date → 15
// o	Time → 10:30 AM
// •	Print the updated appointment.
// Methods to use
// setFullYear()
// setMonth()
// setDate()
// setHours()
// setMinutes()

let today = new Date();

today.setFullYear(2027);
today.setMonth(12 - 1);
today.setDate(15);
today.setHours(10);
today.setMinutes(30);

console.log("Updated Appointment : " , today);

// Task 3: Multi-Country Meeting Time
// Scenario:
// Your company has meetings with India, USA, and Japan.
// Requirements:
// Display the current time in:
// •	India
// •	New York
// •	Tokyo
// Use:
// toLocaleString()

// timeZone:
// "Asia/Kolkata"
// "America/New_York"
// "Asia/Tokyo"

 currentTime = new Date();

//  India Time Zone
console.log("India : " ,currentTime.toLocaleString("en-IN", {
    timeZone : "Asia/Kolkata"
 }));

//  New York Time Zone
 console.log("New Tork : " ,currentTime.toLocaleString("en-IN", {
    timeZone : "America/New_York"
 })); 

//  Tokyo Time Zone
 console.log("Tokyo : " ,currentTime.toLocaleString("en-IN", {
    timeZone : "Asia/Tokyo"
 }));


//  Task 4: Product Warranty Expiry
// Scenario:
// A customer purchased a laptop today. Warranty is valid for 2 years.
// Requirements:
// •	Get today's date.
// •	Add 2 years using:
// setFullYear()
// •	Print:
// Purchase Date :
// Warranty Expiry :

let purchasedDate = new Date();

let warrentyYear = new Date(purchasedDate);
 warrentyYear.setFullYear(warrentyYear.getFullYear() + 2);

console.log("Purchase Date : ", purchasedDate);
console.log("Warrenty Expiry : ", warrentyYear);


// Task 5: Digital Clock
// Scenario:
// Create a live digital clock for a website.
// Requirements:
// •	Use:
// new Date()
// toLocaleTimeString()
// setInterval()
// •	Update every second.
// Expected Output
// 10:45:01 AM
// 10:45:02 AM
// 10:45:03 AM

setInterval(()=> {
    let clock = new Date();
    console.log(clock.toLocaleTimeString());
    
},1000)

