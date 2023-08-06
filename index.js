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
    name: "description",
    message: "Please provide project description ?",
    Validate: (descptionInput) => {
      if (descptionInput) {
        return true;
      } else {
        console.log("description is required !");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message: "Please Provide Installation instruction",
    Validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please input installation instruction!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
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
    choices: ["Agpl", "Apache", "MIT", "no license"],
  },
  {
    type: "input",
    name: "contribute",
    message: "Please input any contribution guidlines for this project",
    Validate: (contributionInput) => {
      if (contributionInput) {
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
    message: "Please enter test instruction:",
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
    name: "question",
    message: " if users have question or issues how to report ?",
    Validate: (questionInput) => {
      if (questionInput) {
        return true;
      } else {
        console.log("Please enter contact information !");
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
    Validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter email address !");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeFile = (fileNameContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./generated-README.md", fileNameContent, (err) => {
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
    return writeFile(pageMD);
  })

  .then((writeToFileRespose) => {
    console.log(writeToFileRespose.message);
  })

  .catch((err) => {
    console.log(err);
  });
