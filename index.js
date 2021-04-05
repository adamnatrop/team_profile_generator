const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const utils = require("./src/utils");


const teamArray = [];

// var employee = new Employee();
// employee.getName();
// employee.getId();

async function getManager(){

        let done = false  

        while(!done){
            let employee = new Employee();

            let nameResultObj = await inquirer.prompt(employee.getName());
            employee.name = nameResultObj.name;

            let idResultObj = await inquirer.prompt(employee.getId());
            employee.id = idResultObj.id;

            let emailResultObj = await inquirer.prompt(employee.getEmail());
            employee.email = emailResultObj.email;

            let roleResultObj = await inquirer.prompt(employee.getRole());
            employee.role = roleResultObj.role
            console.log(employee)

            if (employee.role == 'Manager'){
                console.log("if tatement fired")
                var manager = new Manager(employee.id, employee.name, employee.email, '', employee.role);
                teamArray.push(manager);
                // continue;
                console.log(manager)
                done = true;
                
            } else {
               teamArray.push(employee);
            }
             //done = false;
             console.log(teamArray)
        }

}


getManager()


