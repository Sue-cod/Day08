// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
return Math.floor(Math.random() * (maxNumber - minNumber + 1));
} 
randomRangeNumber(1, 9);
// Only change code above this line
console.log(randomRangeNumber(1, 9));
module.exports = randomRangeNumber;