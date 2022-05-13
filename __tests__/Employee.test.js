const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Potion.js');

test('creates an employee object', () => {
    const employee = new Employee('Matt', 'matthewapryor@gmail.com', 0);

    expect(employee.name).toBe('Matt');
    expect(employee.email).toBe('matthewapryor@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
});

test("gets employee's name", () => {
    const employee = new Employee('Matt', 'matthewapryor@gmail.com', 0);

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("get employee's email", () => {
    const employee = new Employee('Matt', 'matthewapryor@gmail.com', 0);

    expect(employee.getEmail()).toEqual(employee.email.toString());
});
