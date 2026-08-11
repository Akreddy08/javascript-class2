// TASK 1
const studentName = "Akash";
let age = 22;
var course = "Computer Science";
let mark = 85;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Mark:", mark);

// TASK 2
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("Name:", userName);
alert("Your age is: " + userAge);

// TASK 3 
let stringValue = "JavaScript";
let numberValue = 100;
let booleanValue = true;
let undefinedValue;
let nullValue = null;

console.log("Value:", stringValue, "Type:", typeof stringValue);
console.log("Value:", numberValue, "Type:", typeof numberValue);
console.log("Value:", booleanValue, "Type:", typeof booleanValue);
console.log("Value:", undefinedValue, "Type:", typeof undefinedValue);
console.log("Value:", nullValue, "Type:", typeof nullValue);

// TASK 4
let shoppingList = [
    "Shirt",
    "Pant",
    "Shoes",
    "Watch",
    "Bag",
    "Cap"
];

console.log("First Product:", shoppingList[0]);
console.log("Third Product:", shoppingList[2]);
console.log("Last Product:", shoppingList[5]);
console.log("Complete Array:", shoppingList);

// TASK 5
let employee = {
    name: "Akash",
    age: 22,
    role: "Software Developer",
    salary: 40000
};

console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("Salary:", employee.salary);

// TASK 6
let productPrice = 500;
let quantity = 3;

let totalPrice = productPrice * quantity;
let discount = 100;
let finalAmount = totalPrice - discount;

console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

console.log("Addition:", productPrice + quantity);
console.log("Subtraction:", totalPrice - discount);
console.log("Multiplication:", productPrice * quantity);
console.log("Division:", totalPrice / quantity);

// TASK 7
console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");

// TASK 8
console.log(10 > 5 && 20 > 15 || 5 > 10);

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(15 === "15" || 10 > 5 && 8 < 3);

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

console.log(25 < 20 || 30 == "30" && 10 >= 10);

// TASK 9
let passwordCorrect = true;
let loginMessage = passwordCorrect? "Login successful": "Invalid password";

console.log(loginMessage);

// TASK 10
let mark1 = "80";
let mark2 = "70";

let numberMark1 = Number(mark1);
let numberMark2 = Number(mark2);

let totalMarks = numberMark1 + numberMark2;

console.log("Total:", totalMarks);

// TASK 11
let votingAge = 20;

if (votingAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// TASK 12
let studentMark = 85;

if (studentMark > 100 || studentMark < 0) {
    console.log("Invalid Mark");
} else if (studentMark >= 90) {
    console.log("A Grade");
} else if (studentMark >= 75) {
    console.log("B Grade");
} else if (studentMark >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}

// TASK 13
let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}

// TASK 14
let candidateAge = 22;
let height = 175;
let weight = 75;

if (candidateAge >= 21) {

    if (height >= 170) {

        if (weight >= 70) {
            console.log("Candidate is eligible");
        } else {
            console.log("Candidate is not eligible: Weight must be at least 70 kg");
        }

    } else {
        console.log("Candidate is not eligible: Height must be at least 170 cm");
    }

} else {
    console.log("Candidate is not eligible: Age must be at least 21");
}

// TASK 15
let trafficLight = "green";

switch (trafficLight) {

    case "red":
        console.log("Stop the vehicle");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}