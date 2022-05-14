const Engineer = require('../lib/engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Matt', 'matthewapryor@gmail.com', 0);

    expect(engineer.name).toBe('Matt');
    expect(engineer.email).toBe('matthewapryor@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Matt', 'matthewapryor@gmail.com', 0);

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test("get engineer's email", () => {
    const engineer = new Engineer('Matt', 'matthewapryor@gmail.com', 0);

    expect(engineer.getEmail()).toEqual(engineer.email.toString());
});
