const wg = require('write-good');
const fs = require('fs')

let text = fs.readFileSync('RESUME.md', 'utf8')
console.log(wg(text))
