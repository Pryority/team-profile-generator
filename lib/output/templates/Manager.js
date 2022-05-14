const Employee = require("./lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

const manager = new Manager();
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();

module.exports = Manager;