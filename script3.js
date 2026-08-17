// 1. Salary Calculator

let salary1 = 30000;
let bonus1 = 5000;
let tax1 = 2000;

let finalSalary = salary1 + bonus1 - tax1;

console.log("Final Salary:", finalSalary);

// 2. Predict the Output
let a = 10;
let b = a++;
let c = ++a;

console.log(a);
console.log(b);
console.log(c);

// 3. Logical Operators
console.log(10 > 5 && 20 < 10 || 5 === "5");

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(!(10 > 5));


// 4. ATM Withdrawal

let balance = 10000;
let withdrawal = 2500;

if (withdrawal <= 0) {

    console.log("Invalid withdrawal amount");

} else if (withdrawal > balance) {

    console.log("Insufficient balance");

} else if (withdrawal % 100 !== 0) {

    console.log("Withdrawal must be a multiple of 100");

} else {

    balance = balance - withdrawal;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", balance);
}


// 5. Student Grade

let mark = 78;

if (mark >= 90 && mark <= 100) {

    console.log("A");

} else if (mark >= 80) {

    console.log("B");

} else if (mark >= 70) {

    console.log("C");

} else if (mark >= 60) {

    console.log("D");

} else {

    console.log("Fail");
}


// 6. Nested Login
let username = "admin";
let password = "1234";
let otp = 5555;

if (username === "admin") {

    if (password === "1234") {

        if (otp === 5555) {

            console.log("Login successful");

        } else {

            console.log("Invalid OTP");
        }

    } else {

        console.log("Invalid password");
    }

} else {

    console.log("Invalid username");
}


// 7. Number Pattern

for (let i = 1; i <= 10; i++) {

    console.log(i);
}


// 8. Multiplication Table

let num = 7;

for (let i = 1; i <= 10; i++) {

    console.log(num + " x " + i + " = " + (num * i));
}


// 9. Reverse Countdown

let count = 10;

while (count >= 0) {

    console.log(count);

    count--;
}


// 10. OTP System

let correctOTP = 1234;
let attempts = 0;
let otpVerified = false;

while (attempts < 3) {

    let enteredOTP = Number(prompt("Enter OTP:"));

    if (enteredOTP === correctOTP) {

        console.log("OTP verified");

        otpVerified = true;

        break;

    } else {

        console.log("Incorrect OTP");
    }

    attempts++;
}

if (otpVerified === false) {

    console.log("Account blocked");
}


// 11. Array Search
let fruits = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "mango"
];

for (let fruit of fruits) {

    console.log(fruit);
}

console.log("First fruit:", fruits[0]);

console.log(
    "Last fruit:",
    fruits[fruits.length - 1]
);


// 12. Object Details
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for (let key in employee) {

    console.log(key + " : " + employee[key]);
}


// 13. Calculator Function
function calculator(a, b, operator) {

    if (operator === "+") {

        return a + b;

    } else if (operator === "-") {

        return a - b;

    } else if (operator === "*") {

        return a * b;

    } else if (operator === "/") {

        return a / b;

    } else if (operator === "%") {

        return a % b;

    } else {

        return "Invalid operator";
    }
}

console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));


// 14. Employee Salary
function salaryDetails(salary, bonus) {

    return salary + bonus;
}

console.log(
    salaryDetails(40000, 5000)
);


// 15. Function With Default Parameter
function employeeDetails(name, role = "Trainee") {

    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");

employeeDetails("Kamal", "Developer");


// 16. Callback Task
function add(a, b) {

    return a + b;
}

function sub(a, b) {

    return a - b;
}

function mul(a, b) {

    return a * b;
}

function calculate(a, b, callback) {

    return callback(a, b);
}

console.log(
    calculate(20, 10, add)
);

console.log(
    calculate(20, 10, sub)
);

console.log(
    calculate(20, 10, mul)
);


// 17. Generator Task
function* rewards() {

    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}

let rewardGenerator = rewards();

console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);


// 18. Spread Operator
let frontend = [
    "HTML",
    "CSS",
    "JavaScript"
];

let backend = [
    "Node",
    "Express",
    "MongoDB"
];

let fullStack = [
    ...frontend,
    ...backend
];

console.log(fullStack);


// 19. Array Destructuring
let student = [
    "Arun",
    "ECE",
    8.5,
    "Developer"
];

let [
    studentName,
    department,
    cgpa,
    studentRole
] = student;

console.log("Name:", studentName);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", studentRole);


// 20. Nested Object Destructuring
let company = {
    name: "Stackly",

    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};

let {
    employee: {
        name: employeeName,
        role: employeeRole,
        salary: employeeSalary
    }
} = company;

console.log("Employee Name:", employeeName);
console.log("Role:", employeeRole);
console.log("Salary:", employeeSalary);