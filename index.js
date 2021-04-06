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
    
    let manager = new Manager();

    let roleResultObj = await inquirer.prompt(manager.getRole());
    manager.role = roleResultObj.role

    let nameResultObj = await inquirer.prompt(manager.getName());
    manager.name = nameResultObj.name;

    let idResultObj = await inquirer.prompt(manager.getId());
    manager.id = idResultObj.id;

    let emailResultObj = await inquirer.prompt(manager.getEmail());
    manager.email = emailResultObj.email;

    let officeNumberResultObj = await inquirer.prompt(manager.getOfficeNumber());
    manager.officeNumber = officeNumberResultObj.officeNumber;
    
    teamArray.push(manager);

    getTeamMembers();
}


async function getTeamMembers(){
    let done = false  

        while(!done){
            
            addEmployee = await inquirer.prompt(utils.addTeamMember());
            if (addEmployee.answer === "Yes"){
               
            }else {
                done = true;
                return done
            }

            let employee = new Employee();

            let roleResultObj = await inquirer.prompt(employee.getRole());
            employee.role = roleResultObj.role

            let nameResultObj = await inquirer.prompt(employee.getName());
            employee.name = nameResultObj.name;

            let idResultObj = await inquirer.prompt(employee.getId());
            employee.id = idResultObj.id;

            let emailResultObj = await inquirer.prompt(employee.getEmail());
            employee.email = emailResultObj.email;

            

            if (employee.role == 'Engineer'){
                
                let engineer = new Engineer(employee.id, employee.name, employee.email, '', employee.role);
                let gitHubResultObj = await inquirer.prompt(engineer.getGithub());
                engineer.github = gitHubResultObj.github;

                teamArray.push(engineer);
                
                
                
            } else if (employee.role == 'Intern'){
                let intern = new Intern(employee.id, employee.name, employee.email, '', employee.role);
                let schoolResultObj = await inquirer.prompt(intern.getSchool());
                intern.school = schoolResultObj.school;
                
                teamArray.push(intern);
               
            }
            
             console.log(teamArray)
        }
};

getManager()


