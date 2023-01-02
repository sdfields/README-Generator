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
        name: "TableOfContents",
        message: "Please create a table of contents.",
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
        name: "License",
        message: "Please include any licenses used.",
        type: "input",
    },
    {
        name: "Credits",
        message: "Please include a list of any collaborators.",
        type: "input",
    },
    {
        name: "Tests",
        message: "Please provide any tests for your project.",
        type: "input",
    },
    {
        name: "Questions",
        message: "Please provide any questions for your project.",
        type: "input",
    },
];

function generateReadMe(answers) {
    return "# Title\n" + answers.Title + "\n# Description\n" + answers.Description + "\n# Table of Contents\n" + answers.TableOfContents + "\n# Installation\n" + answers.Installation +"\n# Use\n" + answers.Use +"\n# License\n" + answers.License +"\n# Credits\n" + answers.Credits +"\n# Tests\n" + answers.Tests +"\n# Questions\n" + answers.Questions;
}

// TODO: Create a function to write README file
// function writeToFile(README.md, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(subjects)
    .then((answers) =>
      fs.writeFile('README.md', generateReadMe(answers), (error) => {
           return error 
          ? console.error(error)
          : console.log('README stored successfully!')
      })
    );
}

// Function call to initialize app
init();