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
    "Where would you like your README.md file to be stored?"
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
                choices: ["Apache License 2.0", "MIT License"]
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
                name: 'storage',
            }
        ])
        .then((data) => {
            generateReadMe(data);
        }
        );
 }; 


// TODO: Create a function to write README file
function generateReadMe(data) {
    console.log(data);  
    let location = data.storage; 
    let content = 
            `# ${data.project}

            ## Description

            ${data.description} 

            ## Table of Contents

            - [Installation](#installation)
            - [Usage](#usage)
            - [Credits](#credits)
            - [License](#license)
            - [Tests](#tests)

            ## Installation

            ${data.installation} 

            ## Usage

            ${data.usage} 

            To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

                md
                ![alt text](assets/images/screenshot.png)

            ## Credits

            ${data.contributing} 

            ## License

            ${data.license} 
            ---

            ## Badges

            ## Tests

            ${data.tests}`

    renderLicenseBadge(data.license);
    writeToFile(content, location);

};


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log(license);
    let badge; 
    if (license) {
       
        switch (license) {
            case "Apache License 2.0":
                badge = "Apache badge";
                break;
            case "MIT License":
                badge = "MIT badge"; 
        }

        console.log(badge); 

    } else {
        return ""; 
    }
};

/*
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

*/

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


