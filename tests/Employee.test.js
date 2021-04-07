
const Employee = require("../lib/employee");


describe('Employee Class', () => {
    describe('Initialization', () => {
        it("Should create a new employee class and return its properties", () => {
        
            let employee = new Employee('12', "Jim","jim@email.com", "Manager");

            expect(employee.name).toEqual("Jim");
            expect(employee.id).toEqual("12");
            expect(employee.email).toEqual("jim@email.com")
            expect(employee.role).toEqual("Manager");
        });

    })
})

