console.clear()
const { prompt } = require("inquirer")
const mysql = require('mysql2');


// const departmentList = db.query(db.query("SELECT * FROM department ", function (err, results) {
//     console.log(results)

// }))

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees'
    },
    console.log(`Connected to the employees database.`)
);

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
        name: "department",
        message: 'Enter Department Name:',
    },
]
function departmentHandler(menu) {
    switch (menu.menu) {
        case "View All Departments":
            db.query("SELECT * FROM department ORDER BY id", function (err, results) {
                console.clear()
                console.table(results)
                init()
            })
            break;

        case "Add Department":
            prompt(buildDepartment).then(data => {
                let addDepartment = data.department
                db.query(`INSERT INTO department (name)
                VALUES
                (?);`, addDepartment, (err, result) => { console.log(`Sucessfully added department`) })
                init()
            })
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
        name: "first",
        message: 'Enter First Name:',
    },
    {
        type: 'text',
        name: "last",
        message: 'Enter Last Name:',
    },
    {
        type: 'text',
        name: "role",
        message: 'What is their Role?',
    },
    {
        type: 'text',
        name: "manager",
        message: 'Who is their Manager?',
    },
]
const employeeQuery = `SELECT e.id, e.first_name, e.last_name , title, salary, department.name AS department, CONCAT(m.first_name," ",m.last_name) AS Manager
FROM employee e
LEFT JOIN employee m on  m.id = e.manager_id
INNER JOIN role on e.role_id = role.id
Inner join department on role.department_id = department.id
ORDER BY id;`
function employeeHandler(menu) {
    switch (menu.menu) {
        case "View Employee List":

            db.query(employeeQuery, function (err, results) {
                console.clear()
                console.table(results)
                init()
            })

            break;

        case "Add Employee":

            prompt(buildEmployee).then((data) => {

                let insertToEmployee = [data.first, data.last,]
                console.log(data)
                db.query(`INSERT INTO employee (first_name,last_name,role_id,manager_id)
                VALUES
                // (?,?,?,?);`, insertToEmployee, () => console.log(`\nSuccessfully added Employee`))

            })
            break;

        default:
            break;
    }
}
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addToDepartment = []

db.query(`SELECT name FROM department;`, (err, res) => {
    for (let i = 0; i < res.length; i++) {
        addToDepartment.push(res[i].name)
    }
})


const buildRole = [
    {
        type: 'text',
        name: "role",
        message: 'Enter Role Name:',
    },
    {
        type: 'text',
        name: "salary",
        message: 'Enter the Salary:',
    },
    {
        type: 'list',
        name: "department",
        message: 'Add to which department?',
        choices: addToDepartment

    },
]

function roleHandler(menu) {
    console.log(menu)
    switch (menu.menu) {
        case "View All Roles":
            db.query("SELECT * FROM role ORDER BY id", function (err, results) {
                console.clear()
                console.table(results)
                init()
            })

            break;

        case "Add Role":
            prompt(buildRole).then((data) => {
                let departmentindex = ""

                for (let i = 0; i < addToDepartment.length; i++) {
                    if (addToDepartment[i] === data.department) {
                        departmentindex = i
                    }
                }
                let insertToRole = [data.role, data.salary, departmentindex]
                console.log(insertToRole)

                db.query(`INSERT INTO role (title,salary,department_id)
                VALUES
                (?,?,?);`, insertToRole, (err, res) => {
                    console.log(`Sucessfully added role`)
                })
                init()
            }

            )
            break;

        default:
            break;
    }
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
function updateHandler() { }

function menuHandler(choice) {

    if (choice.menu === "View All Roles" || choice.menu === "Add Role") { roleHandler(choice) }
    else if (choice.menu === "View Employee List" || choice.menu === "Add Employee") { employeeHandler(choice) }
    else if (choice.menu === "View All Departments" || choice.menu === "Add Department") { departmentHandler(choice) }
    return "Menu Closed"
}

function init() {
    prompt(menu).then((data) => {
        menuHandler(data);
    })

}

init()