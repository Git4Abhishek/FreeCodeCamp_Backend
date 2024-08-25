// Here we will import the user defined modules (04-names.js and 05-utils,js)..

// These are also working: 
// const names = require('./04-names.js')
// const greet = require('./05-utils.js')

const names = require('./04-names')
// Why without using/refering 'name' variable the output is been shown?
// import * as names from './04-names'
// Does this above importing style also lead in the module being run?
const greet = require('./05-utils')

// Use of modules makes the application to be maintained in shorter files and in a more structured way.. 

greet(names.john)
greet(names.travis)
greet(names.kylie)

// const flavour = require('./06-alternative-flavour')
// console.log(flavour)

require('./07-mind-grenade')

// Using require directly or using variable and then access it, leads in the corresponding been run..