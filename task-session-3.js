console.log("Start");
console.log("Middle");
console.log("End");
function secondFunction() {
    console.log("Second Function");
}

function firstFunction() {
    console.log("First Function");
    secondFunction();
    console.log("Back to First Function");
}

firstFunction();
let num1 = 20;
let num2 = 10;

let sum = num1 + num2;
console.log("Sum =", sum);

let multiply = sum * 2;
console.log("Multiply =", multiply);

let divide = multiply / 5;
console.log("Divide =", divide);
function calculateTotal(price, tax) {
    return price + tax;
}

function printInvoice(price, tax) {
    let total = calculateTotal(price, tax);
    console.log("Total Price =", total);
}

printInvoice(100, 20);

//2

console.log("Hello");

setTimeout(function () {
    console.log("World");
}, 2000);
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
console.log("Loading...");

setTimeout(function () {
    console.log("Done");
}, 3000);

function sendMessage(message) {
    setTimeout(function () {
        console.log(message);
    }, 2000);
}

sendMessage("Your order has been shipped.");

//3


console.log("Start");

setTimeout(function () {
    console.log("Timeout");
}, 1000);

console.log("End");

console.log("One");

setTimeout(function () {
    console.log("Two");
}, 0);

console.log("Three");

console.log("Line 1");

setTimeout(function () {
    console.log("Line 3");
}, 1000);

console.log("Line 2");

console.log("Start");

setTimeout(function () {
    console.log("Async Task");
}, 0);

console.log("Processing...");
console.log("Finish");

//4

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function afterGreeting() {
    console.log("Welcome!");
}

greet("Moataz", afterGreeting);

function calculator(num1, num2, operation) {
    console.log(operation(num1, num2));
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, multiply);
function loadData(callback) {
    console.log("Loading data...");

    setTimeout(function () {
        console.log("Data loaded");
        callback();
    }, 2000);
}

loadData(function () {
    console.log("Displaying data");
});
function login(username, password, callback) {

    console.log("Checking login...");

    setTimeout(function () {

        if (username === "admin" && password === "1234") {
            callback();
        } else {
            console.log("Login Failed");
        }

    }, 2000);
}

function loginSuccess() {
    console.log("Login Successful");
    console.log("Welcome to Dashboard");
}

login("admin", "1234", loginSuccess);