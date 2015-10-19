#! /usr/bin/env babel-node
const {stdin, stdout, exit} = process;
const repeat = require('repeat-string');

let inTag = false;
let betweenTags = false;
let inAttribute = false;
let indentLevel = 0;
const indentString = '  ';

const writeNewline = () => {
  stdout.write('\n' + repeat(indentString, indentLevel));
};

stdin.on('data', (data) => {
  const line = String(data).replace(/\n$/, '');

  let index = 0;
  while (index < line.length) {
    const char = line.charAt(index++);

    // Set state
    if (char === '<') {
      inTag = true;
    } else if (char === '>') {
      inTag = false;
      betweenTags = !betweenTags;
    } else if (char === '"' && inAttribute) {
      writeNewline();
      inAttribute = false;
    }
    else if (char === '/' && WIP) WIP;
  }
});

stdin.on('end', () => exit(0));
