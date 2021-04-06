const inquirer = require("inquirer");
const utils = require("../src/utils");

class Employee {
    constructor(id, name, email, role) {
        
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getName (){
        let name = utils.getPrompt('input', 'Enter Name', 'name');
        return name
      
    };

    getId(){
        let id = utils.getPrompt('input', 'Enter Employee ID number', 'id');
        return id
    };

    getEmail(){
        let email = utils.getPrompt('input', 'Enter Employee email', 'email');
        return email
    };

    getRole(){
        let role = utils.getRolePrompt('list', 'Select Employee Type', 'role');
        return role
    };
}

module.exports = Employee;