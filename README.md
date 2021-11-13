# README.md Generator

# Description 

The what, why, and how of your project:

Week 11 homework where we were tasked with creating a README Generator using what we've learned with Node.js. Every project needs a good README that tells the user what the app is for, how to use/install it, and how other developers can even contribute to it. 

This README Generator is a command-line application that creates a README for the user based off the user's input. 


# Table of Contents
* [Installation](#installation) 
* [Usage](#usage) 
* [Credits](#credits)


# Installation 

Steps required to install your project and how to get the development environment running:

To use this applicationa and generate your own README, git clone the repo to your local. 

Run npm install in order to install the following npm package dependencies:
  - inquirer (will prompt you with the questions from the command line)
  - axios (will grab your info from the GitHub API)

To start the application, run node index.js in the command line.

Answer all the prompts to generate the README.

After answering all the prompts, your README file will be named 'draftREADME.md' and will be ready for you at the top of the repo!

    
# Usage 

<a href="https://watch.screencastify.com/v/nI9aluohVtuIOLGDGgzh">Link to Screencastify with video demo.</a>

Instructions and examples for usage:

When you run, node index.js, the application uses inquirer to ask you a series of questions about your project for your README's content. 

The application then takes your input and uses axios to grab your GitHub profile and any corresponding information needed, such as your avatar and email. 

Lastly, the fs.writeFile generates the README.md file.
    
---

<a href="https://github.com/HayleyMcHugh/readme-generator.git">GitHub</a>

# Credits 

- Dillan Mansor




   



    
   
