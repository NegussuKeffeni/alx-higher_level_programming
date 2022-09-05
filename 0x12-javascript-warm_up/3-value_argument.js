#!/usr/bin/node
const firstArg = process.argv[2];
console.log(firstArg);
if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log(firstArg);
}
