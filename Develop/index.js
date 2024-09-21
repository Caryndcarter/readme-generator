import inquirer from 'inquirer';
import fs from 'fs';


inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'What is your bio?',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn?',
        name: 'LinkedIn',
      },
    {
      type: 'input',
      message: 'What is your Github?',
      name: 'Github',
    },
    {
      type: 'input',
      message: 'What is your phone number?',
      name: 'phone',
    },
    {
      type: 'input',
      message: 'Where do you want to store the files?',
      name: 'files',
    }
  ])
  .then((response) => {
    console.log(response);
    createHTML(response);
  }
  );


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
