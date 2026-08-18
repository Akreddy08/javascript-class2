// 🏆 FINAL CHALLENGE
// STUDENT MANAGEMENT CONSOLE PROGRAM

let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];


// 1. PRINT ALL STUDENTS
function printAllStudents() {

    console.log("ALL STUDENTS");

    for (let student of students) {

        let { name, department, mark } = student;

        console.log(
            "Name:",
            name,
            "| Department:",
            department,
            "| Mark:",
            mark
        );
    }
}

printAllStudents();

// 2. PRINT ONLY ECE STUDENTS
function printECEStudents() {

    console.log("ECE STUDENTS");

    for (let student of students) {

        let { name, department, mark } = student;

        if (department === "ECE") {

            console.log(
                "Name:",
                name,
                "| Mark:",
                mark
            );
        }
    }
}

printECEStudents();

// 3. STUDENTS WHO SCORED ABOVE 80
function printAbove80() {

    console.log("STUDENTS ABOVE 80");

    for (let student of students) {

        let { name, mark } = student;

        if (mark > 80) {

            console.log(
                "Name:",
                name,
                "| Mark:",
                mark
            );
        }
    }
}

printAbove80();

// 4. CALCULATE TOTAL MARKS
function calculateTotal() {

    let total = 0;

    for (let student of students) {

        let { mark } = student;

        total = total + mark;
    }

    return total;
}

let totalMarks = calculateTotal();

console.log("TOTAL MARKS");
console.log("Total:", totalMarks);

// 5. CALCULATE AVERAGE
function calculateAverage() {

    let total = calculateTotal();

    let average = total / students.length;

    return average;
}

let averageMarks = calculateAverage();

console.log("AVERAGE MARK");
console.log("Average:", averageMarks);

// 6. HIGHEST MARK
function findHighestMark() {

    let highest = students[0].mark;

    for (let student of students) {

        let { mark } = student;

        if (mark > highest) {

            highest = mark;
        }
    }

    return highest;
}

let highestMark = findHighestMark();

console.log("HIGHEST MARK");
console.log("Highest Mark:", highestMark);

// 7. LOWEST MARK
function findLowestMark() {

    let lowest = students[0].mark;

    for (let student of students) {

        let { mark } = student;

        if (mark < lowest) {

            lowest = mark;
        }
    }

    return lowest;
}

let lowestMark = findLowestMark();

console.log("LOWEST MARK");
console.log("Lowest Mark:", lowestMark);

// FINAL SUMMARY
console.log("STUDENT MANAGEMENT SUMMARY");
console.log("Total Students:", students.length);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Highest Mark:", highestMark);
console.log("Lowest Mark:", lowestMark);