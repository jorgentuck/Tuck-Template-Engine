const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Validate = require("./lib/Validate");


// Write code to use inquirer to gather information about the development team members,
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee ID?',
                name: 'id',
                validate: (id) => Validate.valId(id),
            },
            {
                type: 'input',
                message: 'Employee name?',
                name: 'name',
                validate: (name) => Validate.valName(name),
            },
            {
                type: 'input',
                message: 'Employee email?',
                name: 'email',
                validate: (email) => Validate.valEmail(email),
            },
            {
                type: 'list',
                message: 'Employee role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then(emp => {
            console.log(emp.name);
            console.log(emp.role);
            switch (emp.role) {
                case 'Manager':
                    console.log(emp.role);
                    managerQuestions(emp);
                    break;
                case 'Engineer':
                    console.log(emp.role);
                    engineerQuestions(emp);
                    break;
                case 'Intern':
                    console.log(emp.role);
                    InternQuestions(emp);
                    break;
            }
        })
};

const managerQuestions = (emp) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee ID?',
                name: 'id',
                validate: (id) => Validate.valId(id),
            },
            {
                type: 'input',
                message: 'Employee name?',
                name: 'name',
                validate: (name) => Validate.valName(name),
            },
            {
                type: 'input',
                message: 'Employee email?',
                name: 'email',
                validate: (email) => Validate.valEmail(email),
            },
            {
                type: 'list',
                message: 'Employee role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then(mgr => {
            console.log(emp.id);
            console.log(emp.name);
            console.log(emp.email);
            console.log(emp.role);
        })
};

const engineerQuestions = (emp) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee ID?',
                name: 'id',
                validate: (id) => Validate.valId(id),
            },
            {
                type: 'input',
                message: 'Employee name?',
                name: 'name',
                validate: (name) => Validate.valName(name),
            },
            {
                type: 'input',
                message: 'Employee email?',
                name: 'email',
                validate: (email) => Validate.valEmail(email),
            },
            {
                type: 'list',
                message: 'Employee role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then(eng => {
            console.log(emp.id);
            console.log(emp.name);
            console.log(emp.email);
            console.log(emp.role);
        })
};

const InternQuestions = (emp) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee ID?',
                name: 'id',
                validate: (id) => Validate.valId(id),
            },
            {
                type: 'input',
                message: 'Employee name?',
                name: 'name',
                validate: (name) => Validate.valName(name),
            },
            {
                type: 'input',
                message: 'Employee email?',
                name: 'email',
                validate: (email) => Validate.valEmail(email),
            },
            {
                type: 'list',
                message: 'Employee role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then(int => {
            console.log(emp.id);
            console.log(emp.name);
            console.log(emp.email);
            console.log(emp.role);
        })
};


init();
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
