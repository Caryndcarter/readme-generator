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
    writeToFile(data);
  }
  );



// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data);  
    let location = data.storage; 
    let content = 
`# ${data.project}

## Description

${data.description} 

## Table of Contents (Optional)

${data.table} 

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


    produceReadme(content, location);

};




function produceReadme (content, location) {

  fs.writeFile(`${location}`, content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });

}; 






// TODO: Create a function to initialize app
////function init() {}

// Function call to initialize app
//init();


