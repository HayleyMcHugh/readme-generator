const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')
const userAPI = require('./utils/userAPI.js');


const userQuestions = [ 
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is the name of your GitHub repo?',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'If applicable, describe the steps required to install your project for the Installation section.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples of your project in use for the Usage section.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'If applicable, provide guidelines on how other developers can contribute to your project.',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Choose a license for your project.',
      choices: ['Perl-0298c3.svg', 'ISC-blue.svg', 'GPLv3-blue.svg', 'MIT-yellow.svg', 'Boost_1.0-lightblue.svg', 'Apache_2.0-blue.svg'],
      name: 'licenses',
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }
        console.log("Success! Your README.md file has been generated!")
    });
}

const writeFile = util.promisify(writeToFile);

async function init () {
  try { 
      const userResponses = await inquirer.prompt(userQuestions);
      const userInfo = await userAPI.getUserInfo(userResponses);
      const markdown = generateMarkdown(userResponses, userInfo);
  
      await writeFile('draftREADME.md', markdown);

   } catch (error) {
    console.log (error);
   }
}

init ();