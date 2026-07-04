

//1. Employee Login (Scope)

function employeeLogin() {

    var companyName = "Stackly IT";
    if (true) {
        let employeeId = 101;
        const password = "Stack@123";

        console.log("Inside Block.......");

        console.log("Company:", companyName);
        console.log("Employee ID:", employeeId);
        console.log("Password:", password);
    }

    console.log("Outside Block");
    console.log("Company Name : " + companyName);

    try {
        console.log(employeeId);
    } catch (error) {
        console.log("Error:", error.message);
    }

    try {
        console.log(password);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

employeeLogin();



// 2. ATM Machine (Hoisting)


console.log(accountBalance); // undefined
var accountBalance = 5000;

try {
    console.log(balance);
} catch (error) {
    console.log("let Error:", error.message);
}
let balance = 10000;

try {
    console.log(pin);
} catch (error) {
    console.log("const Error:", error.message);
}
const pin = 1234;


// 3. Food Delivery App (Named Function)

function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}

orderFood("Chicken Biryani");


// 4. WhatsApp Status (Anonymous Function)


let updateStatus = function (status) {
    console.log("Status Updated :", status);
};

updateStatus("Busy in Meeting");


// 5. Weather App (Arrow Function)


const weather = (city, temperature) => {
    console.log(`${city} Temperature is ${temperature}°C`);
};

weather("Chennai", 36);



// 6. Flipkart Offer (IIFE)


(function () {

    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})
();



// 7. Online Payment (Higher Order + Callback)


function paymentSuccess() {

    console.log("Payment Successful");
}

function makePayment(callback) {

    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);


// 8. YouTube Playlist (Generator Function)


function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
}

const videos = playlist();

let video = videos.next();

while (!video.done) {

    console.log(video.value);
    video = videos.next();
}

console.log("Playlist Completed");


// 9. Student Result (Return)


function calculateTotal() {
    return 485;
}

let totalMarks = calculateTotal();
console.log("Total Marks :", totalMarks);



// 10. Shopping Cart (Return)


function cartTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

let totalAmount = cartTotal(500, 700, 800);
console.log("Total Amount :", totalAmount);


// 11. Salary Calculator (Uncurrying)


function salary(basic, hra, bonus) {
    let total = basic + hra + bonus;
    console.log("Total Salary :", total);
}

salary(40000, 10000, 8000);



// 12. Food Bill (Currying)



function foodBill(food) {
    return function (drinks) {
        return function (dessert) {
            return food + drinks + dessert;
        };
    };
}

console.log(foodBill(200)(100)(80));


// 13. E-commerce Coupon Generator


function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
}

const coupons = couponGenerator();

let coupon = coupons.next();

while (!coupon.done) {
    console.log(coupon.value);
    coupon = coupons.next();
}

console.log("No More Coupons");


// 14. Bank Transaction (Higher Order + Callback)


function transactionSuccess() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccess);


// 15. Employee Profile (Scope)

function employeeProfile() {

    if (true) {
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary1 = 50000;
    }

    console.log("Company:", company);

    try {
        console.log("Designation:", designation);
    } catch (error) {
        console.log("Designation Error:", error.message);
    }

    try {
        console.log("Salary:", salary1);
    } catch (error) {
        console.log("Salary Error:", error.message);
    }
}

employeeProfile();