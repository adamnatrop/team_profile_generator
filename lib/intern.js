const Employee = require("./employee");
const utils = require("../src/utils");

class Intern extends Employee {
    constructor(id, name, email, school, role){
        super(id, name, email, role);
        
        this.specialAttr = school;
    }

    getRole(){
        let role = "Intern";
        return role
    }

    getSchool(){
        let school = utils.getPrompt('input', 'What school do you attend?', 'school');
        return school;
    }
}

module.exports = Intern;