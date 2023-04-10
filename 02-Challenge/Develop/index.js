// TODO: Include packages needed for this application
const fs  = require ('fs');
const inquirer= require ('inquirer');
const path= require('path');
const generateMarkdown= require("utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please name your project',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please give short description of your project',
        name: 'Description',
      },
      {
        type: 'checkbox',
        message: 'License',
        name: 'Please choose the license for your application',
        choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC","none"]
      },
      {
        type: "input",
        name: "screenshot",
        message: "Please provide the relative path to the image you want to use as the screenshot."
      },
      {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
      },
      {
        type: "input",
        name: "usage",
        message:
          "State  technologies associated with this project.",
      },
      { type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
          },
      

    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  

// Function call to initialize app
init();
