#!/usr/bin/node
// A script that prints the number of movies where the character Wedge Antilles is present

const args = process.argv;
let reqURL = args[2];
let request = require('request');
request(reqURL, function (error, response, body) {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    let jso = JSON.parse(body);
    console.log('result:', jso);
  }
});

