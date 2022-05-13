

const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

function Generator() {
    this.employees = [];
    // this.currentEnemy;
    // this.employee;
}

Generator.prototype.initializeGenerator = function () {
    // this.enemies.push(new Enemy('goblin', 'sword'));

    this.currentEmployee = this.employees[0];

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
                name: 'email',
                message: 'What is the EMAIL of the Employee?'
            }])
        .then(({ name, role, email, id }) => {
            switch (new Employee(name, role, email, id)) {
                case intern:
                    if (this.employee.role === 'intern') {
                        // this.employee = 
                    }
                    break;
                case manager:
                    if (this.employee.role === 'manager') {
                        this.employee = new Manager(name, role, email, id);
                    } break;
                case engineer:
                    if (this.employee.role === 'engineer') {
                        this.employee = new Engineer(name, role, email, id);
                    } break;
                default:
                    this.employee = new Employee(name, role, email, id);
            }
            this.employees.push(this.employee);

            console.log(this.employees)


        });
};

Generator.prototype.startNewBattle = function () {
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    }
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());

    console.log(this.currentEnemy.getDescription());

    this.battle();
};

Generator.prototype.battle = function () {
    if (this.isPlayerTurn) {
        inquirer
            .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['Attack', 'Use potion']
            })
            .then(({ action }) => {
                if (action === 'Use potion') {
                    if (!this.player.getInventory()) {
                        console.log("You don't have any potions!");
                        return this.checkAddingOfEmployees();
                    }

                    inquirer
                        .prompt({
                            type: 'list',
                            message: 'Which potion would you like to use?',
                            name: 'action',
                            choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                        })
                        .then(({ action }) => {
                            const potionDetails = action.split(': ');

                            this.player.usePotion(potionDetails[0] - 1);
                            console.log(`You used a ${potionDetails[1]} potion.`);
                            this.checkAddingOfEmployees();
                        });
                } else {
                    const damage = this.player.getAttackValue();
                    this.currentEnemy.reduceHealth(damage);

                    console.log(`You attacked the ${this.currentEnemy.name}`);
                    console.log(this.currentEnemy.getHealth());

                    this.checkAddingOfEmployees();
                }
            });
    } else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);

        console.log(`You were attacked by the ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());

        this.checkAddingOfEmployees();
    }
};

Generator.prototype.checkAddingOfEmployees = function () {
    if (!this.employees) {
        console.log(`You've added ${this.employees.length} employees. Please complete the following prompts to add at least one employee.`);
        this.promptAdditionOfEmployees();
    } else if (this.employees) {
        console.log(`You've defeated the ${this.currentEnemy.name}`);

        this.player.addPotion(this.currentEnemy.potion);
        console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion`);

        this.roundNumber++;

        if (this.roundNumber < this.enemies.length) {
            this.currentEnemy = this.enemies[this.roundNumber];
            this.startNewBattle();
        } else {
            console.log('You win!');
        }
    } else {
        console.log("You've been defeated!");
    }
};

module.exports = Generator;
