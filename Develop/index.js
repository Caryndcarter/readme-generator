// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input

const questions = [
    "What is the name of your project?", 
    "Provide a short description explaining the what, why, and how of your project",
    "Add a table of contents to make it easy for users to find what they need.",
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
        name: 'table',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'installation',
      },
    {
      type: 'input',
      message: questions[4],
      name: 'usage',
    },
    {
      type: 'list',
      message: questions[5],
      name: 'license',
      choices: ["Apache License 2.0", "MIT License"]
    },
    {
      type: 'input',
      message: questions[6],
      name: 'contributing',
    }, 
    {
        type: 'input',
        message: questions[7],
        name: 'tests',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'questions',
      }, 
      {
        type: 'input',
        message: questions[9],
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

    let project = data.project;
    console.log(project);

    //produceReadme(data);

};


/*

function produceReadme (content, location) {


  fs.writeFile(`${location}`, content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });

}; 

*/




// TODO: Create a function to initialize app
////function init() {}

// Function call to initialize app
//init();


