
const Employee = require("../lib/employee");
const Manager = require("../lib/manager");


describe('Manager Class', () => {
    describe('Initialization', () => {
        it("Should create a new employee class and return its special attribute", () => {
        
            let manager = new Manager('12', "Jim","jim@email.com","Office Number: 13", "Manager");

            expect(manager.specialAttr).toEqual("Office Number: 13")
            expect(manager.name).toEqual('Jim');
            expect(manager.id).toEqual("12");
            expect(manager.email).toEqual("jim@email.com")
            expect(manager.role).toEqual("Manager");
        });

    })
})
