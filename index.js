// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { argv0 } = require("process");

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
  {
    type: "input",
    name: "Table",
    message: "Please provide table of Contents for this Project?",
    Validate: (TableInput) => {
      if (TableInput) {
        return true;
      } else {
        console.log("Please enter table content!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Installation",
    message: "Please Provide Installation instruction",
    Validate: (InstallationInput) => {
      if (InstallationInput) {
        return true;
      } else {
        console.log("Please input installation instruction!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "Please Provide Usage instruction for this Project?",
    Validate: (UsageInput) => {
      if (UsageInput) {
        return true;
      } else {
        console.log("Please input Usage instruction!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "please select license for this project?"
    choices: ["apache", "agpl","mit", "no lincense"],
    
  },
  {
    type: "input",
    name: "Contribution",
    message: "Please input any contribution guidlines for this project",
    Validate: (ContributionInput) => {
      if (ContributionInput) {
        return true;
      } else {
        console.log("Contribution guidelines is require!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please enter test instruction",
    Validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter test insttruction !");
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
