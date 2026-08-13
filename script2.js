// TASK 1
let employeeName = prompt("Enter employee name:");
let employeeAge = Number(prompt("Enter age:"));
let experience = Number(prompt("Enter experience in years:"));
let salary = Number(prompt("Enter salary:"));

if (employeeAge >= 21 && experience >= 1 && salary >= 20000) {
    console.log("Employee is eligible");
} else {
    if (employeeAge < 21) {
        console.log("Not eligible: Age must be 21 or above");
    }

    if (experience < 1) {
        console.log("Not eligible: Experience must be at least 1 year");
    }

    if (salary < 20000) {
        console.log("Not eligible: Salary must be at least ₹20,000");
    }
}

// TASK 2
let balance = 10000;

let withdrawalAmount = Number(
    prompt("Enter withdrawal amount:")
);

if (withdrawalAmount <= 0) {
    console.log("Invalid withdrawal amount");
} else if (withdrawalAmount > balance) {
    console.log("Insufficient balance");
} else if (withdrawalAmount % 100 !== 0) {
    console.log("Withdrawal amount should be a multiple of 100");
} else {
    balance = balance - withdrawalAmount;

    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + balance);
}

// TASK 3
let correctUsername = "akash";
let correctPassword = "1234";

let attempt = 1;
let loginSuccessful = false;

while (attempt <= 3) {

    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    if (
        username === correctUsername &&
        password === correctPassword
    ) {
        console.log("Login successful");

        loginSuccessful = true;

        break;
    } else {
        console.log("Wrong username or password");
    }

    attempt++;
}

if (loginSuccessful === false) {
    console.log("Account locked");
}

// TASK 4
let math = Number(prompt("Enter Math mark:"));
let english = Number(prompt("Enter English mark:"));
let science = Number(prompt("Enter Science mark:"));
let social = Number(prompt("Enter Social mark:"));
let computer = Number(prompt("Enter Computer mark:"));

let total = math + english + science + social + computer;

let average = total / 5;

let grade;

if (average >= 90 && average <= 100) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);

// TASK 5
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 5 4 3 2 1

let i = 5;

while (i >= 1) {
    console.log(i);

    i--;
}


// 1 2 3 4 5

let j = 1;

do {
    console.log(j);

    j++;
} while (j <= 5);

// TASK 6
let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

let prices = [
    50000,
    1000,
    2000,
    15000
];

let cartTotal = 0;

for (let i = 0; i < products.length; i++) {

    console.log(
        products[i] + " - ₹" + prices[i]
    );

    cartTotal = cartTotal + prices[i];
}

console.log("Total = ₹" + cartTotal);

// TASK 7
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};

for (let key in employee) {

    console.log(
        key + " : " + employee[key]
    );
}

function calculateBonus() {

    if (employee.salary >= 40000) {
        return 5000;
    } else {
        return 3000;
    }
}

let bonus = calculateBonus();

console.log("Bonus:", bonus);

// TASK 8
function deposit(balance, amount) {

    return balance + amount;
}

function withdraw(balance, amount) {

    return balance - amount;
}

function checkBalance(balance) {

    return balance;
}

let bankBalance = 10000;

bankBalance = deposit(bankBalance, 5000);

console.log("Deposited: ₹5000");

bankBalance = withdraw(bankBalance, 2000);

console.log("Withdrawn: ₹2000");

console.log(
    "Current Balance: ₹" + checkBalance(bankBalance)
);

// TASK 9
function add(a, b) {

    return a + b;
}

function sub(a, b) {

    return a - b;
}

function mul(a, b) {

    return a * b;
}

function div(a, b) {

    return a / b;
}

function calculate(callback, a, b) {

    return callback(a, b);
}

console.log(
    calculate(add, 20, 10)
);

console.log(
    calculate(sub, 20, 10)
);

console.log(
    calculate(mul, 20, 10)
);

console.log(
    calculate(div, 20, 10)
);