
const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");


describe('Engineer Class', () => {
    describe('Initialization', () => {
        it("Should create a new employee class and return its special attribute", () => {
        
            let engineer = new Engineer('15', "Tim","tim@email.com","GitHub: Username", "Engineer");

            expect(engineer.specialAttr).toEqual("GitHub: Username")
            expect(engineer.name).toEqual('Tim');
            expect(engineer.id).toEqual("15");
            expect(engineer.email).toEqual("tim@email.com")
            expect(engineer.role).toEqual("Engineer");
        });

    })
})
