const Generator = require('./lib/Generator.js');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "employees.html");

const render = require("./lib/htmlRenderer");

const questions = [{
    type: 'text',
    name: 'name',
    message: 'What is the NAME of the Employee?'
},
{
    type: 'list',
    name: 'role',
    message: 'What is the ROLE of the Employee?',
    choices: ['Intern', 'Manager', 'Engineer']
},
{
    type: 'text',
    name: 'id',
    message: 'What is the ID of the Employee?'
},
{
    type: 'text',
    name: 'email',
    message: 'What is the EMAIL of the Employee?'
}
]

const employees = [];
const generateEmployees = () => {
    inquirer
        .prompt(questions)
        .then((ans1) => {
            inquirer
                .prompt([
                    {
                        when: () => ans1.role === "Manager",
                        type: "input",
                        message: "What is their office number",
                        name: "officeNumber",
                    },
                    {
                        when: () => ans1.role === "Engineer",

                        type: "input",
                        message: "What is the GitHub Username?",
                        name: "github",
                    },

                    {
                        when: () => ans1.role === "Intern",

                        type: "input",
                        message: "What is the school's name?",
                        name: "school",
                    },

                    {
                        type: "confirm",
                        message: "Would you like to add another employees member?",
                        name: "addMember",
                    },
                ])

                .then((ans2) => {
                    if (ans1.role === "Manager") {
                        const manager = new Manager(ans1.name, ans1.id, ans1.email, ans1.role, ans2.officeNumber);
                        employees.push(manager);
                    }

                    if (ans1.role === "Engineer") {
                        const engineer = new Engineer(ans1.name, ans1.id, ans1.email, ans1.role, ans2.github);
                        employees.push(engineer);
                    }

                    if (ans1.role === "Intern") {
                        const intern = new Intern(ans1.name, ans1.id, ans1.email, ans1.role, ans2.school);
                        employees.push(intern);
                    }
                    if (ans2.addMember) {
                        generateEmployees();
                    } else {
                        employees.forEach((employees) => {
                            console.log(employees);
                        });
                        fs.writeFile(outputPath, render(employees), (err) => {
                            if (err) {
                                throw err;
                            }
                            console.log("Success, employees HTML is created!");
                        });
                    }
                });
        })
        .catch((err) => {
            if (err) {
                throw err;
            }
        });
};

generateEmployees();