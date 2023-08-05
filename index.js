// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const { resolve } = require("path");
const { error } = require("console");

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
    message: "please select license for this project?",
    choices: ["Agpl", "Apache", "Mit", "no license"],
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
  {
    type: "input",
    name: "github",
    message: "Please enter your github username",
    Validate: (githubUsername) => {
      if (githubUsername) {
        return true;
      } else {
        console.log("github username is required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
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
const writeToFile = (fileNameContent) => {
  return new Promise((resolve, reject) => {
    fs.writeToFile("./generated-README.md", fileNameContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        is: true,
        message: "README file created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions).then((readmeData) => {
    return readmeData;
  });
};

// Function call to initialize app
init()
  .then((readmeData) => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
  })

  .then((pageMD) => {
    return writeToFile(pageMD);
  })

  .then((writeToFileRespose) => {
    console.log(writeToFileRespose.message);
  })

  .catch((err) => {
    console.log(err);
  });
