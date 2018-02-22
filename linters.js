const fs = require('fs')
const alex = require('alex')
const cliches = require('no-cliches');
var nodehun = require('nodehun');

let englishCheck = {
    file: 'RESUME.md',
    checklist: [
        (text) => {
            console.log("Running Alex for catching insensitive, inconsiderate writing")
            console.log(alex.markdown(text).messages)
        },
        (text) => {
            console.log("Running Cliches for catching cliches ;)")
            console.log(cliches(text))
        }
    ]
}

let portugueseCheck = {
    file: 'RESUME_PT.md',
    checklist: [
        (text) => {
            console.log("Running nodehun for spellchecking")
        }
    ]
}

let lint = (check) => {
    let text = fs.readFileSync(check.file, 'utf8')
    console.log(`Checking resume: ${check.file}`)
    check.checklist.forEach(check => {
        check(text)
        console.log("=========================================================================")
        console.log("=========================================================================")
        console.log("=========================================================================")
    })
}



var affbuf = fs.readFileSync('pt_BR.aff');
var dictbuf = fs.readFileSync('pt_BR.dic');
var dict = new nodehun(affbuf,dictbuf);

dict.isCorrect('color',function(err, correct, origWord){
        console.log(err, correct, origWord);
});


const ignoreList = [
      /#+[ \f\t\v ]*([^\n]*\n)/g, // header
      />[ \f\t\v ]*([^\n]*\n)/g, // blockquote
      /!*\[.*\]\(.*\)()\n/g, // link
      /(?:(?:\*[ \f\t\v ]*){3,}|(?:-[ \f\t\v ]*){3,})()\n/g, // horizon
      /[ \f\t\v ]*\*[ \f\t\v ]*([^\n]*\n)/g, // ul
      /[ \f\t\v ]*[0-9]+\.[ \f\t\v ]*([^\n]*\n)/g // ol

];

// TODO
// // code, strong
//
// export default function(text) {
//   return ignoreList.reduce((result, exp) => result.replace(exp, '$1'), text);
//   }
// }
