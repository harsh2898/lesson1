/**
 * Created by test on 09/09/2016.
 */
// link to node's filesystem module to read text files
var fs = require('fs');

// open and read food list
var food = fs.readFileSync('food.txt','utf-8');

// print a food heading and the list of food
console.log('FOOD');
console.log(food);

// repeat with the drinks
var drink = fs.readFileSync('drinks.txt','utf-8');
console.log('\nDRINKS');
console.log(drinks);