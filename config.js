// Set up your project here
const author = 'keneanung';  // author name on GitHub, might also be an org
const projectName = 'Bashing.js-2.0'; // project name on GitHub
const libraryName = 'Bashing'; // name of the resulting library. Used by webpack to create a global name
const npmPackageName = 'bashing-js-2'; // Name of the NPM package that should be published
const projectDescription = 'Second generation Bashing script for IRE Nexus'; // Project description in the NPM package
const authorEmail = 'keneanung@gmail.com' // author email address
const docuTitle = 'Second Generation Bashing in Nexus'; // Title of the documentation website
const docuTagline = 'All new Bashing package'; // Used for documentation website


// don't modify the exports below (except to add new fields)
module.exports = {
    author,
    projectName,
    githubRepoWebUrl: `https://github.com/${author}/${projectName}`,
    githubRepoGitUrl: `git://github.com/${author}/${projectName}.git`,
    libraryName,
    npmPackageName,
    projectDescription,
    authorEmail,
    docuTitle,
    docuTagline,
}