function generateMarkdown(userResponses, userInfo) {
    return `# ${userResponses.title}

[![License](https://img.shields.io/badge/License-${userResponses.licenses})]
    
# Table of Contents
* [Description](#description)
* [Installation](#installation) 
* [Usage](#usage) 
* [Contributing](#contribution) 
* [Tests](#tests)
* [License](#licenses)
* [Questions](#questions)


# Description 

The what, why, and how of your project:

${userResponses.description}


# Installation 

Steps required to install your project and how to get the development environment running:

${userResponses.installation}

    
# Usage 

Instructions and examples for usage:

${userResponses.usage}
    
   
# Contributing 

If you would like to contribute it, you can follow these guidelines on how to do so.

${userResponses.contribution}

   
# Tests

Tests for application and how to run them:

${userResponses.tests}
    
   
# License

${userResponses.licenses}
    
---

# Questions?

<img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="35%" />

For any questions, please don't hesitate to contact me. 

GitHub: [@${userInfo.login}](${userInfo.url})`
    
}

module.exports = generateMarkdown;