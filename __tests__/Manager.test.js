const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("can set office number via constructor argument", () => {
    const testNumber = 100;
    const e = new Manager("Foo", 1, "test@test.com", testNumber);
    expect(e.officeNumber).toBe(testNumber);
});

test('getRole() should return "Manager"', () => {
    const testRole = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testRole);
});

test("can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});