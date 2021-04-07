const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const utils = require("./src/utils");
const generateHTML = require("./src/generateHTML");


const teamArray = [];


// starting function prompts manager info
async function getManager(){
    
    let manager = new Manager();
    // calls class specific question stores the results into the new class object
    let roleResultObj = await inquirer.prompt(manager.getRole());
    manager.role = roleResultObj.role

    let nameResultObj = await inquirer.prompt(manager.getName());
    manager.name = nameResultObj.name;

    let idResultObj = await inquirer.prompt(manager.getId());
    manager.id = idResultObj.id;

    let emailResultObj = await inquirer.prompt(manager.getEmail());
    manager.email = emailResultObj.email;

    let officeNumberResultObj = await inquirer.prompt(manager.getOfficeNumber());
    manager.specialAttr = officeNumberResultObj.officeNumber;
    // pushes the manager object into the team array
    teamArray.push(manager);

    getTeamMembers();
}

// loop function to generate each employee profile for Engineer and Intern Class
async function getTeamMembers(){
    let done = false  

        while(!done){
            // starting prompt to add team member or be finished
            addEmployee = await inquirer.prompt(utils.addTeamMember());
            if (addEmployee.answer === "Yes"){
            // if No is selected it completes the loop and moves to the processHTML function   
            }else {
                done = true;
                continue
            }
            // Employee class prompts and stores results
            let employee = new Employee();

            let roleResultObj = await inquirer.prompt(employee.getRole());
            employee.role = roleResultObj.role

            let nameResultObj = await inquirer.prompt(employee.getName());
            employee.name = nameResultObj.name;

            let idResultObj = await inquirer.prompt(employee.getId());
            employee.id = idResultObj.id;

            let emailResultObj = await inquirer.prompt(employee.getEmail());
            employee.email = emailResultObj.email;

            
            // Engineer and Intern Class specific prompts
            if (employee.role == 'Engineer'){
                
                let engineer = new Engineer(employee.id, employee.name, employee.email, '', employee.role);
                let gitHubResultObj = await inquirer.prompt(engineer.getGithub());
                engineer.specialAttr = gitHubResultObj.github;

                teamArray.push(engineer);
                
                
                
            } else if (employee.role == 'Intern'){
                let intern = new Intern(employee.id, employee.name, employee.email, '', employee.role);
                let schoolResultObj = await inquirer.prompt(intern.getSchool());
                intern.specialAttr = schoolResultObj.school;
                
                teamArray.push(intern);
               
            }
            
             
        }
        
    processHTML();
};



// uses generateHTML.js to create the HTML file
function processHTML(){

    let htmlProfileArray = generateHTML.itterateProfiles(teamArray);
    let profilesHTML = htmlProfileArray.join('');
    let finishedHTML = generateHTML.finishedHTML(profilesHTML);
    
    writeHTMLToFile(finishedHTML);

}

// writes the HTML file - Application Complete
function writeHTMLToFile(html){
    fs.writeFile("./dist/index.html", html, (err) =>
    err ? console.error(err) : console.log("Your Team Profile Page has been created. Launch index.html from the dist folder to view your team!"))

}



getManager()


