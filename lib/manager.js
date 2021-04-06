
const Employee = require("./employee");
const utils = require("../src/utils");


class Manager extends Employee {

    

    constructor(id, name, email, officeNumber, role){
        super(id, name, email, role);

        this.specialAttr = officeNumber;

    }

    getOfficeNumber(){
        let officeNumber = utils.getPrompt('input', 'What is the Office Number?', 'officeNumber');
        return officeNumber
    }
    getRole(){
        let role = utils.getManagerRolePrompt('list', 'Select Employee Type', 'role');
        return role
    }

}

module.exports = Manager;