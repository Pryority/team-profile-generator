class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return `Employee`
    };

    getId() {
        return this.id;
    };

    getName() {
        if (!this.name) {
            return `This employee was not given a name.`;
        }
        return this.name;
    };

    getEmail() {
        if (!this.email) {
            return `This employee was not designated an email.`;
        }
        return this.email;
    };
}

module.exports = Employee;
