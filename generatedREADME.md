# README.md Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application was created in order to make it easy create a README.md file for any application by simply submitting answers to a series of command line prompts.  It was created using Node.js and the Inquirer and FS packages and written in Javascript.  Inquirer will allow for the command line prompts and fs will give you a markdown file at the end in the folder location of your choice.  Your README.md file will have headers for Description, Table of Contents, Installation, Usage, License, Contributing, Tests and Questions.  The answers you provide to Inquirer will populate in the corresponding sections of the README.md file.  

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

After downloading or cloning this repo, make sure you have Node installed and run ``node init -y`` to instantiate your application as a Node app.  Make sure your package.json file has a "type" "module" listed in it.  Install the fs and inquirer packages with ``npm install fs`` and ``npm install inquirer``.  Run the application with ``node index.js``. 

## Usage

Begin by running ``node index.js`` in the command line. Once you are prompted by Inquirer to answer the necessary questions, be ready to submit your answers by copying and pasting them from a file where you have already drafted your answers.  The Inquirer prompt questions are "What is the name of your project?", "Provide a short description explaining the what, why, and how of your project", "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.","Provide instructions and examples for use.", "Choose a license", "List your collaborators, if any, with links to their GitHub profiles.", "Write tests for your application. Then provide examples on how to run them here.","Enter your github username for your users to ask you questions.", "Provide your email address for your users to ask questions.", "Where would you like your README.md file to be stored? Provide the full file path."  You will choose a license from a dropdown when asked.  A badge for that license will appear on the new README.md file.  Your new file will appear in the file location on your local hard drive corresponding to the file path you enter and provide to Inquirer.  

## License

MIT License

The license for this application is MIT License.

https://opensource.org/license/MIT

## Contributing

Caryn Carter https://github.com/Caryndcarter 

## Tests

Tests for this application have not been written at this time.  When they are written, they will be added in this section.

## Questions

For questions visit https://github.com/caryndcarter or write to carter.caryn@gmail.com.