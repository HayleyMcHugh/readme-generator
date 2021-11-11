function generateMarkdown(userResponses, userInfo) {
    
    let tableOfContents = `## Table of Contents`;

    if (userResponses.installation !== '') { tableOfContents += `
    * [Installation](#installation)` };

    if (userResponses.usage !== '') { tableOfContents += `
    * [Usage](#usage)` };

    if (userResponses.contribution !== '') { tableOfContents += `
    * [Contributing](#contribution)` };

    if (userResponses.tests !== '') { tableOfContents += `
    * [Tests](#tests)` };
    

    let topMarkdown = 
    `# ${userResponses.title}

    ## Description 

    *The what, why, and how of your project:*

    ${userResponses.description}

    `
    topMarkdown += tableOfContents

    topMarkdown += `
    * [Licenses](#licenses)`;

    if (userResponses.installation !== '') {
    
    topMarkdown += 
    `

    ## Installation 

    *Steps required to install your project and how to get the development environment running:*

    ${userResponses.installation}`
    };

    if (userResponses.usage !== '') {

    topMarkdown += 
    `

    ## Usage 

    *Instructions and examples for usage:*

    ${userResponses.usage}`
    };

    if (userResponses.contribution !== '') {
    
    topMarkdown +=
    `

    ## Contributing 

    *If you would like to contribute it, you can follow these guidelines on how to do so.*

    ${userResponses.contribution}`
    };

    if (userResponses.tests !== '') {

    topMarkdown += 
    `

    ## Tests

    *Tests for application and how to run them:*

    ${userResponses.tests}`
    };

    topMarkdown +=
    `

    ## License

    ${userResponses.licenses}
    `;

    let developerSection = 
    `
    ---

    ## Questions?

    <img src"${userInfo.avatar_url}" alt="${userInfo.login}" width="35%" />

    For any questions, please don't hesitate to contact me. 
    
    Please see my information below:

    GitHub: [@${userInfo.login}](${userInfo.url})
    `;

    if (userInfo.email !== null) {
    
    developerSection +=
    `

    Email: ${userInfo.email}

    `};

    topMarkdown += developerSection;

    return topMarkdown;
}

module.exports = generateMarkdown;