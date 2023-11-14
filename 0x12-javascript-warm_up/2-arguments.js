#!/usr/bin/node
const { argv } = require('node:process');

const len = argv.length;

if (len >= 3) {
  console.log('Argument Found');
} else {
  console.log('No argument');
}
