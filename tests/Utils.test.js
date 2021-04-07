
const utils = require("../src/utils");


describe('getPrompts', () => {
    describe('getRolePrompt', () => {
        it("Should call getRolePrompt and return prompt object containing role question", () => {
        
            let prompt = utils.getRolePrompt('input', 'What is the Office Number?', 'officeNumber')

            expect(prompt.type).toEqual("input")
        });

    })

    describe('addTeamMember', () => {
        it("Should call the addTeamMember method and retun the the answer object", () => {
        
            let addEmpl = utils.addTeamMember('list', 'Would you like to add another team member?', 'answer')

            expect(addEmpl.choices).toEqual(['Yes', 'No'])
        });

    })

    describe('getManagerRolePrompt', () => {
        it("Should call the getManagerRolePrompt and retun Manager", () => {
        
            let addManager = utils.getManagerRolePrompt('list', 'Would you like to add a Manager', 'name')

            expect(addManager.choices).toEqual(['Manager'])
        });

    })

})


    
