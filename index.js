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
    inquirer.prompt(
        {
           type: "input",
           name:"first",
           message:"What is the employee's first name?" 
        },
        {
            type: "input",
            name:"last",
            message:"What is the employee's last name?" 
         },
         {
            type: "list",
            name:"employeeRole",
            message:"What role belongs to this employee?",
            choices:[roles.arr]//we want to cycle through an array of roles dynamically created depending on what we have currently.
         },
         {
            type: "list",
            name:"manager",
            message:"Who manages this employee?",
            choices:[managers.arr]//we want to cycle through an array of managers dynamically created depending on what we have currently.
         }
    )
    console.log("New employee added to the employees table!")
};

const updateRole = (answers) => {
    inquirer.prompt(
        {
            type: "list",
            name: "updatedEmployee",
            message:"Which employee's role did you want to update?",
            choices:[employees.arr]//we want to cycle through an array of employees including first and last names dynamically created depending on what we have currently.
         },
         {
            type: "list",
            name:"updatedEmplRole",
            message:"To which role would you like to assign this employee?",
            choices:[roles.arr]//we want to cycle through an array of roles dynamically created depending on what we have currently.
         },
    )
    console.log(`Employee ${first} ${last}'s role has been updated!`)
    //later log a congratulations if it is promotion
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
    console.log("added new role to the roles table!")
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
    console.log(`${addedDept} added to departements table!`)
};