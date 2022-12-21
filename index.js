// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input

const subjects = [
    {
        name: "Title",
        message: "Please insert the title of your project.",
        type: "input",
    },
    {
        name: "Description",
        message: "Please type a description of your repository.",
        type: "input",
    },
    {
        name: "Installation",
        message: "Please give a brief description of any necessary installations to properly run your project.",
        type: "input",
    },
    {
        name: "Use",
        message: "Please describe how to use your application.",
        type: "input",
    },
    {
        name: "Credits",
        message: "Please include a list of any collaborators.",
        type: "input",
    },
    {
        name: "Links",
        message: "Please provide any useful links for your project.",
        type: "input",
    },
    {
        name: "License",
        message: "Please include any licenses used.",
        type: "input",
    },
];

// TODO: Create a function to write README file
// function writeToFile(README.md, data) {}

inquirer
  .prompt(subjects)
  .then((readme) =>
    fs.writeFile('readme.json', JSON.stringify(readme), (error) => {
        return error 
        ? console.error(error) 
        : console.log('README stored successfully!')
    })
  );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();