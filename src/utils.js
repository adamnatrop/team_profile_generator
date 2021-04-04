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
         }
         return rolePrompt;
}


module.exports = {
    getPrompt,
    getRolePrompt
}