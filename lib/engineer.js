const Employee = require("./employee");
const utils = require("../src/utils");

class Engineer extends Employee {
    constructor(id, name, email, gitHub, role){
        super(id, name, email, role);
        
        this.github = gitHub;

    }

    getRole(){
        let role = "Engineer";
        return role
    }

    getGithub(){
        let gitHub = utils.getPrompt('input', 'What is your github username?', 'github');
        return gitHub
    }
}

module.exports = Engineer;