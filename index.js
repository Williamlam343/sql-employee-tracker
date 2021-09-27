const { prompt } = require("inquirer")


// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const menu = [
    {
        type: 'list',
        name: "menu",
        message: 'What would you like to do?',
        choices: [
            "View Employee List",
            "Add Employee",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Update Employee Role",
            "End"
        ]
    }
]

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
const buildDepartment = [
    {
        type: 'text',
        name: "name",
        message: 'Enter First Name:',
    },
]
function departmentHandler(menu) {
    switch (menu.choices) {
        case "View All Departments":

            break;

        case "Add Departments":

            break;

        default:
            break;
    }
}
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const buildEmployee = [
    {
        type: 'text',
        name: "name",
        message: 'Enter First Name:',
    },
    {
        type: 'text',
        name: "name",
        message: 'Enter Last Name:',
    },
    {
        type: 'text',
        name: "name",
        message: 'What is their Role?',
    },
    {
        type: 'text',
        name: "name",
        message: 'Who is their Manager?',
    },
]
function employeeHandler(menu) {
    switch (menu.choices) {
        case "View Employee List":

            break;

        case "Add Employee":

            break;

        default:
            break;
    }
}
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function roleHandler(menu) {
    switch (menu.choices) {
        case "View All Roles":

            break;

        case "Add Role":

            break;

        default:
            break;
    }
}

function updateHandler() { }



function init() {
    prompt(menu)
}








// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

init()