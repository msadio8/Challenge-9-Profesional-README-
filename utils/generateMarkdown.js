// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `
  ![badge](https://img.shields.io/badge/License-${license}-yellow.svg)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `
    [${license}](https://opensource.org/licenses/${license})
     `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
    ## [License](#Table-of-contents)

    This application is under:
    
    ${renderLicenseLink(license)}
     `;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectName}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table-of-Contents

  * [Description](#description)

  * [Installation](#installation )

  * [License](#license )

  * [Usage](#usage)

  * [Contribute](#contribute)

  * [Tests](#tests)

  * [Question](#question)

  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## license

  ${data.license}

  ${renderLicenseSection(data.licence)}

  ## Contribute

  ${data.contribute}

  ## Tests

  ${data.test}

  ![](utils/images/image1.png)
  
  ![](utils/images/image2.png)

  [Walkthrough video click here 🎬](https://drive.google.com/file/d/1wDMi6mh31hqJTdMA7jMz3qLcIX9vxuYS/view)
  
  ## Question

  ${data.question}

  ## Github
  
  ${data.github}

  ## Email

  ${data.email}

`;
}

module.exports = generateMarkdown;
