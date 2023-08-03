// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "ProjectName",
    message: "What is the title of this Project ?",
    Validate: (ProjectNameInput) => {
      if (ProjectNameInput) {
        return true;
      } else {
        console.log("Project name is required !");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Description",
    message: "Please provide project description ?",
    Validate: (ProjectDescption) => {
      if (ProjectDescption) {
        return true;
      } else {
        console.log("description is required !");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
