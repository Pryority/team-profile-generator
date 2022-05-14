const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

function Generator() {
    this.employees = [];
}

Generator.prototype.initializeGenerator = function () {
    createNewEmployee();
};

const createNewEmployee = () => {
    inquirer
        .prompt(
            [{
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
            ])
        .then(({ name, role, id, email }) => {
            const employee = new Employee(name, role, id, email)

            console.log(employee)
            handleNewEmployee();
        });
};

const checkEmployeeType = (role) => {

};

const handleNewEmployee = () => {

    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'newEmployee',
                message: `Would you like to add another employee?`
            },
        ])
        .then((answer) => {
            if (!answer.newEmployee) {
                console.log(`Employees have been added! 👤`);
                return;
            }
            createNewEmployee();
        })
};

module.exports = Generator;
