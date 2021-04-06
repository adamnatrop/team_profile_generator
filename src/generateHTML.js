

function finishedHTML(profileCards){
    const indexHTML = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>My Team</title>
</head>
<body>
    <header class="container-fluid">
        <div class="row">
            <h1 class="col-12">My Team</h1>
        </div>
    </header>
    <main class="container  mt-4">
        <div class="row justify-content-center">
            ${profileCards}
            
        </div>
</main>

</body>
</html>
    `
    return indexHTML
}

function createProfileHTMLCards(profile) {
    let icon = '';
    if (profile.role === 'Manager'){
        icon = 'fas fa-mug-hot '
    } else if (profile.role === 'Engineer'){
        icon = 'fas fa-glasses '
    } else if (profile.role === 'Intern'){
        icon = 'fas fa-user-graduate '
    }
    
    let profileHTML = 
    `
    <div id="employeeCard" class="mb-4 col-sm col-md-4">
        <header>
            <h2>${profile.name}</h2>
            <h3><span class="${icon}"></span> ${profile.role}</h3>
            <div class="card">
                <ul class="list-group">
                    <li class="list-group-item">${profile.id}</li>
                    <li class="list-group-item">${profile.email}</li>
                    <li class="list-group-item">${profile.specialAttr}</li>
                    
                </ul>
            </div>
        </header>
    </div>

    `
    return profileHTML
}

function itterateProfiles(array){
    
    const htmlArray = [];

    array.forEach(function(item, index){
        
       let profileHTML = createProfileHTMLCards(item);
       htmlArray.push(profileHTML);

    })

    return htmlArray
}




module.exports = {
    finishedHTML,
    createProfileHTMLCards,
    itterateProfiles
    
}