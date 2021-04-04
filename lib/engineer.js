const Employee = require("./employee");
const utils = require("../src/utils");

class Engineer extends Employee {
    constructor(id, name, email, gitHub){
        super(id, name, email,);
        
        this.gitHub = gitHub;

    }

    getRole(){
        console.log(`Job Role: Engineer`);
    }

    getGithub(){
        console.log(`GitHub username: ${gitHub}`);
    }
}

module.exports = Engineer;