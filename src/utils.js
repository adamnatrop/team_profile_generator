const inquirer = require("inquirer");

async function getPrompt(type, message, name){
    inquirer
        .prompt(
            {
                type: type,
                message: message,
                name: name,
            }
        ).then((response) => {
            name = response.name
        
        })    
       
}


function getRolePrompt(type, message, name){
    inquirer
        .prompt(
            {
                type: type,
                message: message,
                name: name,
                choices: ['Manager','Engineer', 'Intern']
            }
        ).then(response => role = response.role)     
}


module.exports = {
    getPrompt,
    getRolePrompt
}