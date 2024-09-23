// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input

const questions = [
    "What is the name of your project?", 
    "Provide a short description explaining the what, why, and how of your project",
    "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    "Provide instructions and examples for use.",
    "Choose a license",
    "List your collaborators, if any, with links to their GitHub profiles.",
    "Write tests for your application. Then provide examples on how to run them here.",
    "Enter your github username for your users to ask you questions.",
    "Provide your email address for your users to ask questions.", 
    "Where would you like your README.md file to be stored? Provide the full file path."
];

const prompts = [
    "project", "description", "installation", "usage", "license", "collaborators", "tests", "questions", "storage" 
];


// TODO: Create a function to initialize app
function init() {

    /*for (let i = 0; i <questions.length; i++) {
        inquirer
        .prompt([
        {
            type: 'input',
            message: questions[i],
            name: prompts[i],
        }
        ])
        .then((data) => {
            writeToFile(data);
        }
        );*/

    

       inquirer
            .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'project',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ["Apache License 2.0", "MIT License", "Eclipse Public License v.10", "Mozilla Public License 2.0"]
            },
            {
                type: 'input',
                message: questions[5],
                name: 'collaborators',
            }, 
            {
                type: 'input',
                message: questions[6],
                name: 'tests',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'questions',
            },
            { 
                type: 'input',
                message: questions[8],
                name: 'email',
            }, 
            {
                type: 'input',
                message: questions[9],
                name: 'storage',
            }
        ])
        .then((data) => {

            const returnedbadge = renderLicenseBadge(data.license);
           const returnedlink = renderLicenseLink(data.license); 
           const licenseSection = renderLicenseSection(data.license); 
           const licenseMarkdown = generateMarkdown(data.license, returnedlink, licenseSection); 
          
        
            writeReadMe(data, returnedbadge, licenseMarkdown);
        }
        );
 }; 



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    let badge; 

    if (license) {
       
        switch (license) {
            case "Apache License 2.0":
                badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "MIT License":
                badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"; 
                break;
            case "Eclipse Public License v.10":
                badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
                break;
            case "Mozilla Public License 2.0":
                badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        }

        return badge; 
        
    } else {
        return ""; 
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let link; 

    if (license) {
       
        switch (license) {
            case "Apache License 2.0":
                link= "https://opensource.org/license/apache-2-0";
                break;
            case "MIT License":
                link = "https://opensource.org/license/MIT"; 
                break;
            case "Eclipse Public License v.10":
                link = "https://opensource.org/license/EPL-1.0";
                break;
            case "Mozilla Public License 2.0":
                link = "https://opensource.org/license/MPL-2.0";
        }

        return link; 
        
    } else {
        return ""; 
    }

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    let section; 

    if (license) {
       
        switch (license) {
            case "Apache License 2.0":
                section= "The license for this application is Apache License 2.0.";
                break;
            case "MIT License":
                section = "The license for this application is MIT License."; 
                break;
            case "Eclipse Public License v.10":
                section = "The license for this application Eclipse Public License v.10.";
                break;
            case "Mozilla Public License 2.0":
                section = "The license for this apaplication is Mozilla Public License 2.0.";
        }

        return section; 
        
    } else {
        return ""; 
    }


};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateMarkdown(license, link, section) {

    if (license) {

    let licenseMark = 
`## License

${license}

${section}

${link}`

    return licenseMark; 

    } else {

    return ""; 

    }

}



// TODO: Create a function to write README file
function writeReadMe(data, badge, licenseMarkdown) {
   
    let location = data.storage; 
    let content = 
`# ${data.project}
${badge}

## Description

${data.description} 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation} 

## Usage

${data.usage} 

${licenseMarkdown}

## Contributing

${data.collaborators} 

## Tests

${data.tests}

## Questions

For questions visit https://github.com/${data.questions} or write to ${data.email}.`

    writeToFile(content, location);

};

//Function to write the README file to the local file system
function writeToFile (content, location) {

    fs.writeFile(`${location}`, content, err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  
  }; 


// Function call to initialize app
init();









