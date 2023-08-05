// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
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
  if (license === "mit") {
    return `
    [${license}(https://opensource.org/licenses/${license})
     `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "mit") {
    return `
    ## [License](#table-of-contents)

    This application is under:
    
    ${renderLicenseLink(license)}
     `;
  } else {
    return " ";
  }
}

function renderLicenseTOC(license) {
  if (license === "mit") {
    return `
  * [Lincese](#license)
    `;
  } else {
    return " ";
  }
}

function renderContribute(confirmContribute, data) {
  if (!confirmContribute) {
    return `
    Third party contributors are welcome no guidelines required.
    `;
  } else {
    return `
  ${data}
   `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectName}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  *[Description](#description)
  *[Installation](#installation )
  *[Usage](#usage)
  ${renderLicenseTOC(data.licence)}
  *[Contribute](#contribute)
  *[Tests](#tests)
  *[Question](#questions)

  ##[Description](#table-of-contents)
 
  ${data.Description}
  

  ##[Installation](#table-of-contents)

  ${data.installation}

  ##[Usage](#table-of-contents)

  ${data.usage}

  ${renderLicenseSection(data.licence)}

  ##[Contribute](#table-of-contents)
  ${data.contribute}

  ${renderContribute(data.confirmContribute, data.contribute)}

  ##[Test](#table-of-contents)
  ${data.test}
  
  [Github](https://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
