
const Employee = require("../lib/employee");
const Intern = require("../lib/intern");


describe('intern Class', () => {
    describe('Initialization', () => {
        it("Should create a new employee class and return its special attribute", () => {
        
            let intern = new Intern('16', "bob","bob@email.com","School: UofM", "Intern");

            expect(intern.specialAttr).toEqual("School: UofM")
            expect(intern.name).toEqual('bob');
            expect(intern.id).toEqual("16");
            expect(intern.email).toEqual("bob@email.com")
            expect(intern.role).toEqual("Intern");
        });

    })
})
