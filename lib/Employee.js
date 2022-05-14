class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getRole() {
        return `Employee`
    };

    getId() {
        if (!this.id) {
            return (`An employee was not given an id.`);
        }
        return this.id;
    };

    getName() {
        if (!this.name) {
            return `An employee was not given a name.`;
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
