const inquirer = require("inquirer");
const fs = require("fs");

const contents = [
    {
        name: "Description",
        message: "Please type a description of your repository.",
        type: input
    },
    {
        name: "Installation",
        message: "Please give a brief description of any necessary installations to properly run your project.",
        type: input
    },
    {
        name: "Use",
        message: "Please describe how to use your application.",
        type: input
    },
    {
        name: "Credits",
        message: "Please include a list of any collaborators.",
        type: input
    },
    {
        name: "Links",
        message: "Please provide any useful links for your project.",
        type: input
    },
    {
        name: "License",
        message: "Please include any licenses used.",
        type: input
    },
];

inquirer
  .prompt(questions)
  .then((answers) =>
    fs.writeFile('answers.json', JSON.stringify(answers), (error) => {
        return error 
        ? console.error(error) 
        : console.log('File written successfully')
    })
  );