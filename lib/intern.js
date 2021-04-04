const Employee = require("./employee");
const getPrompt = require("../src/utils");
const getRolePrompt = require("../src/utils");

class Intern extends Employee {
    constructor(company, team, id, name, email, role, school){
        super(company, team, id, name, email, role);
        
        this.school = school;

    }

    getRole(){
        console.log(`Job Role: Intern`);
    }

    getSchool(){
        console.log(`Intern School: ${school}`);
    }
}

module.exports = Intern;