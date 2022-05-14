const Intern = require("../lib/Intern");

test("can set school via constructor", () => {
    const testSchool = "UofT";
    const e = new Intern("Foo", 1, "test@test.com", testSchool);
    expect(e.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
    const testRole = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UofT");
    expect(e.getRole()).toBe(testRole);
});

test("can get school via getSchool()", () => {
    const testValue = "UofT";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});