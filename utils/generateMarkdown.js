// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `
    ![License: MIT](https://img.shields.io/badge/License-${license}MIT-yellow.svg)
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==="MIT") {
    return`
    [${license}(https://opensource.org/licenses/MIT${license})
     `;
    } else {
      return'';
    }

    

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return`
    ## [License](#table-of-Contents)

    This application is under:
    
    ${renderLicenseLink(license)}
     `;
    } else {
      return '';
    }
}

function renderLicenseTOC(licenses) {
  if (licence ==="MIT") {
    return `
    * [Lincese](#license)
    `;
  } else {
    return '';
  }
}

function renderContribute(confirmContribute, data) {
  if (confirmContribute) {
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
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  *[Description](#description)
  *[Installation Instruction](#installation instruction)
  *[Usage](#Usage)
  ${renderLicenseTOC(data.licence)}
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Question](#questions)

  ##[Description](#table-of-contents)
 
  ${data.what}
  ${data.why}
  ${data.how}

  ##[Installation](#table-of-contents)

  ${data.installation}

  ##[Usage](#table-of-contents)

  ${data.usage}

  ${renderLicenseSection(data.licence)}

  ##[Contributing](#table-of-contents)

  ${renderContribute(data.confirmContribute, data.contribute)}

  ##[Test](#table-of-contents)
  
  [Github](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
