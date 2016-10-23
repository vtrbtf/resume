const fs = require('fs')
const alex = require('alex')
const cliches = require('no-cliches');

let text = fs.readFileSync('RESUME.md', 'utf8')
console.log("Running Alex for catching insensitive, inconsiderate writing")
console.log(alex.markdown(text).messages)
console.log("=========================================================================")
console.log("Running Cliches for catching cliches ;)")
console.log(cliches(text))
