//1) install inquirer and mysql2
//import the npm module 'inquirer'
const { default: inquirer } = require('inquirer');
const require = require('inquirer');
//import mysql2 
const mysql = require('mysql2');

inquirer
.prompt( {
    type: "list",
    name: "Options",
    message: "What would you like to do?",
    choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add a Roll",
        "View All Departments",
        "Add a Department",
        "Quit"
    ]
});

//make an object with all answers in it

const viewEmployees = (answers) => {
    console.log("display table 'employees' ")
};

const addEmployee = (answers) => {
    console.log("create prompt")
};

const updateRole = (answers) => {
    console.log("prompt for new input")
};

const viewRoles = (answers) => {
    console.log ("display roles table")
};

const addRole = (answers) => {
    inquirer.prompt(
        {
        type:"input",
        name:"newRole",
        message:"What is the name of the new role?"
    },
    {
        type:"input",
        name:"salary",
        message:"What is the salary of this role?"
    },
    {
        type:"input",
        name:"roleDept",
        message:"Which department does this role belong in?"
    }
    )
    console.log("added new role to the roles database!")
};

const viewDepts = (answers) => {
    console.log("display departments table")
};

const addDept = (answers) => {
    inquirer.prompt(
        {
            type:"input",
            name:"addedDept",
            message:"What is the name of the new department?"
        }
    )
    console.log("${addedDept} added to departements database!")
};