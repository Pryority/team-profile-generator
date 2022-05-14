const Engineer = require("../lib/Engineer");

test("can set github account via constructor", () => {
    const testGithub = "Pryority";
    const e = new Engineer("Foo", 1, "test@test.com", testGithub);
    expect(e.github).toBe(testGithub);
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "Pryority");
    expect(e.getRole()).toBe(testRole);
});

test("can get GitHub username via getGithub()", () => {
    const testValue = "Pryority";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});