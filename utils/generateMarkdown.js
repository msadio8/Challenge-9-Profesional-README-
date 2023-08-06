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

  ## Table-of-Contents

  * [Description](#description)

  * [Installation](#installation )

  * [License](#license )

  * [Usage](#usage)

  * [Contribute](#contribute)

  * [Tests](#tests)

  * [Question](#question)

  ## [Description](#Table-of-contents)
 
  ${data.description}
  

  ## [Installation](#Table-of-contents)

  ${data.installation}

  ## [Usage](#Table-of-contents)

  ${data.usage}

  ## [License](#license )

  ${renderLicenseSection(data.licence)}

  ## [Contribute](#Table-of-contents)

  ${data.contribute}


  ## [Tests](#Table-of-contents)

  ${data.test}
  
 ## [Question](#Table-ofcontents)

  ${data.question}
  
  [Github](https://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
