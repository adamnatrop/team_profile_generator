const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const utils = require("./src/utils");
const generateHTML = require("./src/generateHTML");


const teamArray = [];



async function getManager(){
    
    let manager = new Manager();

    let roleResultObj = await inquirer.prompt(manager.getRole());
    manager.role = roleResultObj.role

    let nameResultObj = await inquirer.prompt(manager.getName());
    manager.name = nameResultObj.name;

    let idResultObj = await inquirer.prompt(manager.getId());
    manager.id = `ID: ${idResultObj.id}`;

    let emailResultObj = await inquirer.prompt(manager.getEmail());
    manager.email = `Email: ${emailResultObj.email}`;

    let officeNumberResultObj = await inquirer.prompt(manager.getOfficeNumber());
    manager.specialAttr = `Office Number: ${officeNumberResultObj.officeNumber}`;
    
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
                continue
            }

            let employee = new Employee();

            let roleResultObj = await inquirer.prompt(employee.getRole());
            employee.role = roleResultObj.role

            let nameResultObj = await inquirer.prompt(employee.getName());
            employee.name = nameResultObj.name;

            let idResultObj = await inquirer.prompt(employee.getId());
            employee.id = `ID: ${idResultObj.id}`;

            let emailResultObj = await inquirer.prompt(employee.getEmail());
            employee.email = `Email: ${emailResultObj.email}`;

            

            if (employee.role == 'Engineer'){
                
                let engineer = new Engineer(employee.id, employee.name, employee.email, '', employee.role);
                let gitHubResultObj = await inquirer.prompt(engineer.getGithub());
                engineer.specialAttr = `Github: ${gitHubResultObj.github}`;

                teamArray.push(engineer);
                
                
                
            } else if (employee.role == 'Intern'){
                let intern = new Intern(employee.id, employee.name, employee.email, '', employee.role);
                let schoolResultObj = await inquirer.prompt(intern.getSchool());
                intern.specialAttr = `School: ${schoolResultObj.school}`;
                
                teamArray.push(intern);
               
            }
            
             
        }
        
    processHTML();
};




function processHTML(){

    let htmlProfileArray = generateHTML.itterateProfiles(teamArray);
    let profilesHTML = htmlProfileArray.join('');
    let finishedHTML = generateHTML.finishedHTML(profilesHTML);
    
    writeHTMLToFile(finishedHTML);

}


function writeHTMLToFile(html){
    fs.writeFile("./dist/index.html", html, (err) =>
    err ? console.error(err) : console.log("Your Team Profile Page has been created. Launch index.html from the dist folder to view your team!"))

}



getManager()


