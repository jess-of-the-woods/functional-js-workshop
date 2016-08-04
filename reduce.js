//var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
/*
function countWords(inputWords) {
  var thing = inputWords.reduce(function(sum, order) {
    sum + order;
  } 0)
console.log(thing);
return thing;
}

module.exports = countWords
*/

//var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWords(inputWords) {
var fruit = inputWords.reduce(function(prev, curr) {
  return prev + curr;
})

module.exports = countWords