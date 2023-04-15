//1) install inquirer and mysql2
//import the npm module 'inquirer'
const require = require('inquirer');
//import mysql2 
const mysql = require('mysql2');

// potentially uneccessary
//connection object for mySQL 
// const db = mysql.createConnection(
//     {
//     //the database should exist on mysql already. we connect to it to enable querying to it.
//     host:'local host',
//     user:'root',
//     password:'Mbaku2018!',
//     database: 'name_db'
//     },
//     console.log('Connected to database!')
// );