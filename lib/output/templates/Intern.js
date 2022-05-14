const Employee = require("./lib/Employee");

class Intern extends Emmployee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

const intern = new intern();

intern.getName();
intern.getId();
intern.getEmail();
intern.getGithub();
intern.getRole();

module.exports = Intern;