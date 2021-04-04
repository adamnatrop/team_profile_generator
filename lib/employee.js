const inquirer = require("inquirer");
const utils = require("../src/utils");


class Employee {
    // employeeName = '';
    // id = '';
    // email = '';
    // role = '';

    constructor(id, name, email,) {
        
        this.id = id;
        this.name = name;
        this.email = email;
       

    }


    async getName(){
        this.name = await utils.getPrompt('input', 'Enter Name', 'name')
      
    };

    async getId(){
        this.id = await utils.getPrompt('input', 'Enter Employee ID number', 'id')
        
    };

    getEmail(){
        this.email = utils.getPrompt('input', 'Enter Employee email', 'email')
    
    };

    getRole(){
        this.role = utils.getRolePrompt('list', 'Select Employee Type', 'role')
    };

}





module.exports = Employee;