const inquirer = require("inquirer");

function getPrompt(type, message, name){
    // inquirer
    //     .prompt(
    //         {
    //             type: type,
    //             message: message,
    //             name: name,
    //         }
    //     ).then((response) => {
    //         name = response.name
        
    //     })   
    let prompt =
            {
                type: type,
                message: message,
                name: name,
            }
                return prompt
         
       
}


function getRolePrompt(type, message, name){
    // inquirer
    //     .prompt(
    //         {
    //             type: type,
    //             message: message,
    //             name: name,
    //             choices: ['Manager','Engineer', 'Intern']
    //         }
    //     ).then(response => role = response.role)  
    let rolePrompt =
        
        {
         type: type,
         message: message,
         name: name,
         choices: ['Engineer', 'Intern']
         }
         return rolePrompt;
}

function getManagerRolePrompt(type, message, name){
 
    let rolePrompt =
        
        {
         type: type,
         message: message,
         name: name,
         choices: ['Manager']
         }
         return rolePrompt;
}

function addTeamMember(){

    let employeeOptions = 

        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'answer',
            choices: ['Yes', 'No']
        }
        return employeeOptions
}

module.exports = {
    getPrompt,
    getRolePrompt,
    getManagerRolePrompt,
    addTeamMember
}