// =====================================================
// JAVASCRIPT EMPLOYEE MANAGEMENT SYSTEM
// =====================================================

// -----------------------------------------------------
// EMPLOYEE DATA
// -----------------------------------------------------

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2022-06-15")
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 35000,
        experience: 3,
        skills: ["Communication", "Excel", "Recruitment"],
        joiningDate: new Date("2021-04-10")
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 75000,
        experience: 5,
        skills: ["Java", "Spring Boot", "MySQL"],
        joiningDate: new Date("2019-08-20")
    },
    {
        id: 104,
        name: "Ravi",
        department: "Finance",
        salary: 28000,
        experience: 1,
        skills: ["Excel", "Accounting", "Tally"],
        joiningDate: new Date("2023-01-12")
    },
    {
        id: 105,
        name: "Priya",
        department: "IT",
        salary: 60000,
        experience: 4,
        skills: ["Angular", "TypeScript", "JavaScript"],
        joiningDate: new Date("2020-03-18")
    },
    {
        id: 106,
        name: "Karthik",
        department: "Sales",
        salary: 50000,
        experience: 2,
        skills: ["Sales", "Communication", "Marketing"],
        joiningDate: new Date("2022-09-05")
    },
    {
        id: 107,
        name: "Divya",
        department: "IT",
        salary: 110000,
        experience: 7,
        skills: ["React", "Node.js", "MongoDB"],
        joiningDate: new Date("2017-11-25")
    },
    {
        id: 108,
        name: "Manoj",
        department: "Support",
        salary: 30000,
        experience: 1,
        skills: ["Networking", "Linux", "Troubleshooting"],
        joiningDate: new Date("2023-07-01")
    }
];


// 1. DISPLAY ALL EMPLOYEES

function displayEmployees(employeeList = employees) {

    console.log("ALL EMPLOYEES");

    employeeList.forEach(function(employee) {

        console.log(
            "ID:", employee.id,
            "| Name:", employee.name,
            "| Department:", employee.department,
            "| Salary:", employee.salary,
            "| Experience:", employee.experience
        );

    });
}

displayEmployees();


// 2. FIND EMPLOYEES WITH SALARY > ₹40,000

function filterHighSalaryEmployees() {

    let result = employees.filter(function(employee) {

        return employee.salary > 40000;

    });

    console.log("SALARY ABOVE ₹40,000");

    console.log(result);
}

filterHighSalaryEmployees();


// 3. FIND PARTICULAR EMPLOYEE USING ID

function searchEmployee(id) {

    let employee = employees.find(function(employee) {

        return employee.id === id;

    });

    if (employee) {

        console.log("EMPLOYEE FOUND");
        console.log(employee);

    } else {

        console.log("Employee not found");

    }

    return employee;
}

searchEmployee(103);


// 4. CALCULATE TOTAL SALARY

function calculateTotalSalary() {

    let total = employees.reduce(function(total, employee) {

        return total + employee.salary;

    }, 0);

    console.log("Total Salary: ₹" + total);

    return total;
}

calculateTotalSalary();


// 5. CHECK SALARY ABOVE ₹1,00,000

let salaryAboveOneLakh = employees.some(function(employee) {

    return employee.salary > 100000;

});

console.log(
    "Anyone earning above ₹1,00,000:",
    salaryAboveOneLakh
);


// 6. CHECK EXPERIENCE

let allHaveExperience = employees.every(function(employee) {

    return employee.experience >= 1;

});

console.log(
    "Everyone has at least 1 year experience:",
    allHaveExperience
);


// 7. SORT EMPLOYEES BY SALARY
// HIGHEST → LOWEST

// Spread creates a copy so original array is not modified.

let sortedEmployees = [...employees].sort(function(a, b) {

    return b.salary - a.salary;

});

console.log("SORTED BY SALARY");

console.log(sortedEmployees);


// 8. ARRAY MANIPULATION

// Add employee using push()

function addEmployee(employee) {

    employees.push(employee);

    console.log("Employee added:", employee.name);
}


// Remove last employee using pop()

function deleteLastEmployee() {

    let removedEmployee = employees.pop();

    console.log(
        "Last employee removed:",
        removedEmployee.name
    );
}


// Add employee at beginning using unshift()

function addEmployeeAtBeginning(employee) {

    employees.unshift(employee);

    console.log(
        "Employee added at beginning:",
        employee.name
    );
}


// Remove first employee using shift()

function deleteFirstEmployee() {

    let removedEmployee = employees.shift();

    console.log(
        "First employee removed:",
        removedEmployee.name
    );
}


// Test array manipulation

let newEmployee1 = {
    id: 109,
    name: "Suresh",
    department: "IT",
    salary: 55000,
    experience: 3,
    skills: ["Python", "Django", "SQL"],
    joiningDate: new Date("2022-12-10")
};

addEmployee(newEmployee1);

deleteLastEmployee();


let newEmployee2 = {
    id: 110,
    name: "Meena",
    department: "HR",
    salary: 42000,
    experience: 2,
    skills: ["HR", "Excel", "Communication"],
    joiningDate: new Date("2023-02-15")
};

addEmployeeAtBeginning(newEmployee2);

deleteFirstEmployee();


// 9. OBJECT DESTRUCTURING

let firstEmployee = employees[0];

let {
    name: employeeName,
    department: employeeDepartment,
    salary: employeeSalary
} = firstEmployee;

console.log("OBJECT DESTRUCTURING");

console.log("Name:", employeeName);
console.log("Department:", employeeDepartment);
console.log("Salary:", employeeSalary);


// ARRAY DESTRUCTURING

let [
    firstSkill,
    secondSkill,
    thirdSkill
] = firstEmployee.skills;

console.log("ARRAY DESTRUCTURING");

console.log("First Skill:", firstSkill);
console.log("Second Skill:", secondSkill);
console.log("Third Skill:", thirdSkill);


// 10. SPREAD OPERATOR

let newEmployeeArray = [...employees];

console.log("SPREAD OPERATOR");

console.log(newEmployeeArray);


// 11. REST OPERATOR

function createEmployeeSkills(name, ...skills) {

    console.log("Employee Name:", name);

    console.log("Skills:", skills);

}

createEmployeeSkills(
    "Rahul",
    "HTML",
    "CSS",
    "JavaScript",
    "Angular"
);


// 12. SEPARATE FUNCTIONS

// ADD EMPLOYEE

function addNewEmployee(employee) {

    employees.push(employee);

    console.log(
        "New employee added:",
        employee.name
    );
}


// DELETE EMPLOYEE

function deleteEmployee(id) {

    let index = employees.findIndex(function(employee) {

        return employee.id === id;

    });

    if (index !== -1) {

        let removedEmployee = employees.splice(index, 1);

        console.log(
            "Deleted employee:",
            removedEmployee[0].name
        );

    } else {

        console.log("Employee not found");

    }
}


// SEARCH EMPLOYEE

function findEmployee(id) {

    let employee = employees.find(function(employee) {

        return employee.id === id;

    });

    if (employee) {

        console.log("Employee found:", employee);

    } else {

        console.log("Employee not found");

    }

    return employee;
}


// TOTAL SALARY

function getTotalSalary() {

    return employees.reduce(function(total, employee) {

        return total + employee.salary;

    }, 0);

}


// DISPLAY EMPLOYEES

function showEmployees() {

    employees.forEach(function(employee) {

        console.log(
            employee.id,
            employee.name,
            employee.department,
            employee.salary
        );

    });

}


// 13. SALARY CATEGORY

function salaryCategory(salary) {

    if (salary >= 0 && salary <= 30000) {

        return "Junior";

    } else if (salary >= 30001 && salary <= 60000) {

        return "Mid Level";

    } else {

        return "Senior";

    }

}


console.log("SALARY CATEGORIES");

employees.forEach(function(employee) {

    console.log(
        employee.name,
        "→",
        salaryCategory(employee.salary)
    );

});


// 14. DATE

console.log("JOINING DATE");

employees.forEach(function(employee) {

    let year = employee.joiningDate.getFullYear();

    let month = employee.joiningDate.getMonth();

    console.log(
        employee.name,
        "| Joining Year:",
        year,
        "| Joining Month:",
        month
    );

});


// NOTE:
// getMonth() returns:
// January = 0
// February = 1
// March = 2
// ...
// December = 11


// 15. USER INPUT - SEARCH EMPLOYEE

let searchId = Number(
    prompt("Enter Employee ID to search:")
);

let searchedEmployee = employees.find(function(employee) {

    return employee.id === searchId;

});

if (searchedEmployee) {

    console.log("SEARCH RESULT");

    console.log("ID:", searchedEmployee.id);
    console.log("Name:", searchedEmployee.name);
    console.log("Department:", searchedEmployee.department);
    console.log("Salary:", searchedEmployee.salary);
    console.log("Experience:", searchedEmployee.experience);
    console.log("Skills:", searchedEmployee.skills);

} else {

    console.log("Employee not found");

}

// BONUS - MENU DRIVEN EMPLOYEE MANAGEMENT SYSTEM

function employeeMenu() {

    let choice;

    while (choice !== "8") {

        choice = prompt(
            "EMPLOYEE MANAGEMENT SYSTEM\n\n" +
            "1. Display All Employees\n" +
            "2. Add Employee\n" +
            "3. Search Employee\n" +
            "4. Filter High Salary Employees\n" +
            "5. Calculate Total Salary\n" +
            "6. Sort By Salary\n" +
            "7. Delete Employee\n" +
            "8. Exit\n\n" +
            "Enter your choice:"
        );

        switch (choice) {

            // 1. DISPLAY
            
            case "1":

                showEmployees();

                break;


            // 2. ADD
            
            case "2":

                let id = Number(
                    prompt("Enter Employee ID:")
                );

                let name = prompt(
                    "Enter Employee Name:"
                );

                let department = prompt(
                    "Enter Department:"
                );

                let salary = Number(
                    prompt("Enter Salary:")
                );

                let experience = Number(
                    prompt("Enter Experience:")
                );

                let skillsInput = prompt(
                    "Enter skills separated by comma:"
                );

                let skills = skillsInput.split(",");

                let joiningDate = new Date(
                    prompt("Enter joining date YYYY-MM-DD:")
                );

                let newEmployee = {

                    id: id,
                    name: name,
                    department: department,
                    salary: salary,
                    experience: experience,
                    skills: skills,
                    joiningDate: joiningDate

                };

                addNewEmployee(newEmployee);

                break;


            // 3. SEARCH
            
            case "3":

                let searchEmployeeId = Number(
                    prompt("Enter Employee ID:")
                );

                findEmployee(searchEmployeeId);

                break;


            // 4. FILTER HIGH SALARY
            
            case "4":

                let highSalaryEmployees =
                    employees.filter(function(employee) {

                        return employee.salary > 40000;

                    });

                console.log(highSalaryEmployees);

                break;


            // 5. TOTAL SALARY

            case "5":

                console.log(
                    "Total Salary: ₹" +
                    getTotalSalary()
                );

                break;

            // 6. SORT BY SALARY

            case "6":

                let sortedList = [...employees].sort(
                    function(a, b) {

                        return b.salary - a.salary;

                    }
                );

                console.log(sortedList);

                break;

            // 7. DELETE

            case "7":

                let deleteId = Number(
                    prompt("Enter Employee ID to delete:")
                );

                deleteEmployee(deleteId);

                break;


            // 8. EXIT
            
            case "8":

                console.log(
                    "Employee Management System closed."
                );

                break;


            // INVALID CHOICE
            

            default:

                console.log("Invalid choice");

        }

    }

}


// =====================================================
// TO START BONUS MENU
// =====================================================

// Uncomment the line below to start the menu.

// employeeMenu();