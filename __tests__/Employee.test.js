const { type } = require('express/lib/response');
const Employee = require('../lib/Employee.js');

test('can create an employee object', () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
});

test("can set name via constructor arguments", () => {
    const name = "Matt";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("can set id via constructor argument", () => {
    const testId = 100;
    const e = new Employee("Foo", testId);
    expect(e.id).toBe(testId);
});

test("can set email via constructor argument", () => {
    const testEmail = "test@test.com";
    const e = new Employee("Foo", 1, testEmail);
    expect(e.email).toBe(testEmail);
});

test("can get name via getName()", () => {
    const testName = "Alice";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("can get id via getId()", () => {
    const testId = 100;
    const e = new Employee("Foo", testId);
    expect(e.getId()).toBe(testId);
});

test("can get email via getEmail()", () => {
    const testEmail = "test@test.com";
    const e = new Employee("Foo", 1, testEmail);
    expect(e.getEmail()).toBe(testEmail);
});

test('getRole() should return "Employee"', () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
