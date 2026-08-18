// ==========================================
// LEVEL 1 — BASICS
// ==========================================

// TASK 1: Student Details

let studentName = "Arun";
let studentAge = 22;
let department = "CSE";
let cgpa = 8.5;

// Normal concatenation
console.log(
    "Name: " + studentName +
    ", Age: " + studentAge +
    ", Department: " + department +
    ", CGPA: " + cgpa
);

// Template literal
console.log(
    `Name: ${studentName}, Age: ${studentAge}, Department: ${department}, CGPA: ${cgpa}`
);


// ==========================================
// TASK 2: Simple Calculator
// ==========================================

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);


// ==========================================
// TASK 3: Age Checker
// ==========================================

let votingAge = Number(prompt("Enter your age:"));

if (votingAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}


// ==========================================
// LEVEL 2 — CONDITIONS
// ==========================================

// TASK 4: Student Grade

let mark = Number(prompt("Enter your mark:"));

if (mark >= 90 && mark <= 100) {
    console.log("A");
} else if (mark >= 80) {
    console.log("B");
} else if (mark >= 70) {
    console.log("C");
} else if (mark >= 60) {
    console.log("D");
} else if (mark >= 0) {
    console.log("Fail");
} else {
    console.log("Invalid mark");
}


// ==========================================
// TASK 5: Login System
// ==========================================

let correctUsername = "admin";
let correctPassword = "1234";

let enteredUsername = prompt("Enter username:");
let enteredPassword = prompt("Enter password:");

if (
    enteredUsername === correctUsername &&
    enteredPassword === correctPassword
) {
    console.log("Login successful");
} else if (
    enteredUsername !== correctUsername &&
    enteredPassword === correctPassword
) {
    console.log("Invalid username");
} else if (
    enteredUsername === correctUsername &&
    enteredPassword !== correctPassword
) {
    console.log("Invalid password");
} else {
    console.log("Invalid credentials");
}


// ==========================================
// TASK 6: ATM Withdrawal
// ==========================================

let balance = 10000;

let withdrawal = Number(
    prompt("Enter withdrawal amount:")
);

if (withdrawal <= 0) {
    console.log("Amount must be greater than 0");
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
} else if (withdrawal % 100 !== 0) {
    console.log("Amount must be a multiple of ₹100");
} else {
    balance = balance - withdrawal;

    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + balance);
}


// ==========================================
// LEVEL 3 — LOOPS
// ==========================================

// TASK 7: Multiplication Table

let tableNumber = Number(
    prompt("Enter a number:")
);

for (let i = 1; i <= 10; i++) {

    console.log(
        `${tableNumber} x ${i} = ${tableNumber * i}`
    );
}


// ==========================================
// TASK 8: Reverse Number
// ==========================================

let number = 12345;
let reverse = 0;

while (number > 0) {

    let digit = number % 10;

    reverse = reverse * 10 + digit;

    number = Math.floor(number / 10);
}

console.log("Reversed Number:", reverse);


// ==========================================
// TASK 9: OTP System
// ==========================================

let correctOTP = 1234;
let attempts = 0;
let verified = false;

while (attempts < 3) {

    let enteredOTP = Number(
        prompt("Enter OTP:")
    );

    if (enteredOTP === correctOTP) {

        console.log("OTP verified");

        verified = true;

        break;

    } else {

        attempts++;

        if (attempts < 3) {
            console.log("Try again");
        }
    }
}

if (verified === false) {
    console.log("Account blocked");
}


// ==========================================
// LEVEL 4 — FUNCTIONS
// ==========================================

// TASK 10: Salary Calculator

function calculateSalary(basicSalary, bonus) {

    return basicSalary + bonus;
}

console.log(
    calculateSalary(30000, 5000)
);


// ==========================================
// TASK 11: Calculator Functions
// ==========================================

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Add:", add(20, 10));
console.log("Subtract:", subtract(20, 10));
console.log("Multiply:", multiply(20, 10));
console.log("Divide:", divide(20, 10));


// ==========================================
// TASK 12: Eligibility Function
// ==========================================

function checkEligibility(age, height, weight) {

    if (
        age >= 21 &&
        height >= 170 &&
        weight >= 70
    ) {
        return "Eligible";
    } else {
        return "Not eligible";
    }
}

console.log(
    checkEligibility(22, 175, 75)
);


// ==========================================
// LEVEL 5 — ARRAY PRACTICE
// ==========================================

// TASK 13: Shopping Cart

let cart = [
    "Laptop",
    "Mouse",
    "Keyboard"
];

// 1. Add Monitor
cart.push("Monitor");

// 2. Remove Mouse
cart.splice(1, 1);

// 3. Add Headset at beginning
cart.unshift("Headset");

// 4. Remove last item
cart.pop();

// 5. Print final cart
console.log("Final Cart:", cart);


// ==========================================
// TASK 14: Find Maximum
// ==========================================

let numbers = [
    10,
    45,
    23,
    89,
    12,
    67
];

let maximum = numbers[0];

for (let number of numbers) {

    if (number > maximum) {
        maximum = number;
    }
}

console.log("Maximum:", maximum);


// ==========================================
// TASK 15: Remove Duplicate Values
// ==========================================

let duplicateNumbers = [
    1,
    2,
    3,
    2,
    4,
    1,
    5
];

let uniqueNumbers = [];

for (let number of duplicateNumbers) {

    if (!uniqueNumbers.includes(number)) {
        uniqueNumbers.push(number);
    }
}

console.log("Without Duplicates:", uniqueNumbers);


// ==========================================
// LEVEL 6 — HIGHER-ORDER FUNCTIONS
// ==========================================

// Employee data

let employees = [
    {
        name: "Arun",
        salary: 30000
    },
    {
        name: "Bala",
        salary: 50000
    },
    {
        name: "Kumar",
        salary: 25000
    },
    {
        name: "Ravi",
        salary: 70000
    }
];


// ==========================================
// TASK 16: Employee Salary Filter
// ==========================================

let highSalaryEmployees = employees.filter(
    employee => employee.salary >= 40000
);

console.log(
    "Employees earning >= ₹40000:",
    highSalaryEmployees
);


// ==========================================
// TASK 17: Increase Salary
// ==========================================

let increasedSalaries = employees.map(
    employee => {

        if (employee.salary < 40000) {

            return {
                ...employee,
                salary: employee.salary + 5000
            };

        } else {

            return {
                ...employee,
                salary: employee.salary + 10000
            };
        }
    }
);

console.log(
    "Increased Salaries:",
    increasedSalaries
);


// ==========================================
// TASK 18: Total Salary
// ==========================================

let totalSalary = employees.reduce(
    (total, employee) => {
        return total + employee.salary;
    },
    0
);

console.log("Total Salary:", totalSalary);


// ==========================================
// TASK 19: Check Employee
// ==========================================

let aboveOneLakh = employees.some(
    employee => employee.salary > 100000
);

console.log(
    "Anyone earning above ₹100000:",
    aboveOneLakh
);

let allAboveTwentyThousand = employees.every(
    employee => employee.salary >= 20000
);

console.log(
    "Everyone earning at least ₹20000:",
    allAboveTwentyThousand
);


// ==========================================
// LEVEL 7 — INTERVIEW CHALLENGE
// ==========================================

// TASK 20: Employee Management Mini Program

let employeeList = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }
];


// 1. Print all employee names using forEach()

console.log("Employee Names:");

employeeList.forEach(
    employee => {
        console.log(employee.name);
    }
);


// 2. Get only IT employees using filter()

let itEmployees = employeeList.filter(
    employee => employee.department === "IT"
);

console.log("IT Employees:", itEmployees);


// 3. Increase every salary by 10% using map()

let increasedEmployees = employeeList.map(
    employee => {

        return {
            ...employee,
            salary: employee.salary * 1.10
        };
    }
);

console.log(
    "Employees with 10% salary increase:",
    increasedEmployees
);


// 4. Find employee with salary ₹45000

let employee45000 = employeeList.find(
    employee => employee.salary === 45000
);

console.log(
    "Employee with ₹45000 salary:",
    employee45000
);


// 5. Calculate total salary using reduce()

let employeeTotalSalary = employeeList.reduce(
    (total, employee) => {
        return total + employee.salary;
    },
    0
);

console.log(
    "Total Salary:",
    employeeTotalSalary
);


// 6. Check whether anyone earns above ₹50000

let anyoneAbove50000 = employeeList.some(
    employee => employee.salary > 50000
);

console.log(
    "Anyone above ₹50000:",
    anyoneAbove50000
);


// 7. Check whether everyone earns above ₹20000

let everyoneAbove20000 = employeeList.every(
    employee => employee.salary > 20000
);

console.log(
    "Everyone above ₹20000:",
    everyoneAbove20000
);


// 8. Sort employees from highest to lowest salary
// Use a copy so original data is not changed

let sortedEmployees = [...employeeList].sort(
    (a, b) => b.salary - a.salary
);

console.log(
    "Highest to Lowest Salary:",
    sortedEmployees
);


// 9. Destructure each employee's name and salary

employeeList.forEach(
    employee => {

        let {
            name: employeeName,
            salary: employeeSalary
        } = employee;

        console.log(
            "Name:",
            employeeName,
            "Salary:",
            employeeSalary
        );
    }
);


// 10. Spread operator to create a new employee list

let newEmployeeList = [
    ...employeeList
];

console.log(
    "New Employee List:",
    newEmployeeList
);