
// challenge 1

let userPIN = "1234";
let balance = 5000;

let enteredPIN = prompt("Enter your PIN:");

if (enteredPIN === userPIN) {
    let operation = prompt(
        "Choose an operation: 1- Withdraw 2- Deposit 3- Check Balance 4- Change PIN"
    );

    switch (operation) {
        case "1":
            let withdrawAmount = Number(prompt("Enter amount to withdraw:"));

            if (withdrawAmount <= balance && withdrawAmount > 0) {
                balance -= withdrawAmount;
                alert("Withdrawal successful.\nNew Balance: " + balance);
            } else {
                alert("Error: Insufficient balance or invalid amount.");
            }
            break;

        case "2":
            let depositAmount = Number(prompt("Enter amount to deposit:"));

            if (depositAmount > 0) {
                balance += depositAmount;
                alert("Deposit successful.\nNew Balance: " + balance);
            } else {
                alert("Error: Deposit amount must be greater than zero.");
            }
            break;

        case "3":
            alert("Current Balance: " + balance);
            break;

        case "4":
            let newPIN = prompt("Enter new 4-digit PIN:");

            if (newPIN.length === 4 && !isNaN(newPIN)) {
                userPIN = newPIN;
                alert("PIN changed successfully.");
            } else {
                alert("Error: PIN must contain exactly 4 digits.");
            }
            break;

        default:
            alert("Invalid operation.");
    }

} else {
    alert("Incorrect PIN.");
}

// challenge 2

let customerName = prompt("Enter customer name:");
let category = prompt("Enter product category (Electronics, Clothing, Grocery):");
let price = Number(prompt("Enter product price:"));
let quantity = Number(prompt("Enter quantity:"));
let coupon = prompt("Enter coupon code:");
let paymentMethod = prompt("Enter payment method (Cash, Visa):");

let subtotal = price * quantity;

let categoryDiscount = 0;

switch (category.toLowerCase()) {
    case "electronics":
        categoryDiscount = subtotal * 0.10;
        break;

    case "clothing":
        categoryDiscount = subtotal * 0.15;
        break;

    case "grocery":
        categoryDiscount = subtotal * 0.05;
        break;

    default:
        categoryDiscount = 0;
}

let total = subtotal - categoryDiscount;

if (coupon === "SAVE10") {
    total -= 10;
}

if (paymentMethod.toLowerCase() === "visa") {
    total -= total * 0.05;
}

let vat = total * 0.14;
let finalPrice = total + vat;

alert(
`Invoice

Customer: ${customerName}

Subtotal: ${subtotal}

Category Discount: ${categoryDiscount}

VAT: ${vat.toFixed(2)}

Final Price: ${finalPrice.toFixed(2)}`
);


// challenge 3

let studentName = prompt("Enter student name:");
let attendance = Number(prompt("Enter attendance percentage:"));
let midterm = Number(prompt("Enter midterm score:"));
let finalExam = Number(prompt("Enter final exam score:"));
let assignment = Number(prompt("Enter assignment score:"));
let tuitionPaid = prompt("Is tuition paid? (yes/no)");

if (tuitionPaid.toLowerCase() !== "yes") {
    alert("You cannot view your result until tuition is paid.");
}
else if (attendance < 75) {
    alert("Status: Fail بسبب انخفاض نسبة الحضور.");
}
else {

    let total = midterm + finalExam + assignment;

    let grade;

    if (total >= 90) {
        grade = "A";
    }
    else if (total >= 80) {
        grade = "B";
    }
    else if (total >= 70) {
        grade = "C";
    }
    else if (total >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    let status = total >= 60 ? "Pass" : "Fail";

    alert(
`Student: ${studentName}

Total Score: ${total}

Grade: ${grade}

Status: ${status}`
    );
}