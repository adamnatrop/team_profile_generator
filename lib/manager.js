
const Employee = require("./employee");
const utils = require("../src/utils");


class Manager extends Employee {

    

    constructor(id, name, email, officeNumber, role){
        super(id, name, email, role);

        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
        officeNumber = utils.getPrompt('input', 'What is the Office Number?', 'officeNumber');

    }
    getRole(){
        role = utils.getRolePrompt('list', 'Select Employee Type', 'role');

    }

}

module.exports = Manager;