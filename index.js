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
           employee.name = await inquirer.prompt(employee.getName());
           employee.id = await inquirer.prompt(employee.getId());

                // employee.name = await inquirer.prompt( 
                //         {
                //         type: 'input',
                //         message: 'Enter Name:',
                //         name: 'name',
                // });

                // employee.id = await inquirer.prompt( 
                //         {
                //         type: 'input',
                //         message: 'Enter ID Number:',
                //         name: 'id',
                // });
           
                console.log(employee)
           // employee.getId();
            // employee.getEmail()
            // employee.getRole();

            // if (employee.role == "Manager"){
            //     var manager = new Manager(employee);
            //     teamArray.push(manager);
            //     continue;
            // } else {
            //    teamArray.push(employee);
            // }
             done = true;
        }

}


getManager()


