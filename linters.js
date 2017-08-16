const fs = require('fs')
const alex = require('alex')
const cliches = require('no-cliches');

let check = (filename) => {
    let text = fs.readFileSync(filename, 'utf8')
    console.log(`Checking resume: ${filename}`)
    console.log("Running Alex for catching insensitive, inconsiderate writing")
    console.log(alex.markdown(text).messages)
    console.log("=========================================================================")
    console.log("Running Cliches for catching cliches ;)")
    console.log(cliches(text))
    console.log("=========================================================================")
}

process.argv.slice(2).forEach( e => check(e) )
