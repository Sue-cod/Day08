function convertToInt(str) {
    return parseInt(str, 16);
}

convertToInt("BA");

console.log(parseInt(convertToInt("BA")));
console.log(parseInt(convertToInt("F1")));
console.log(parseInt(convertToInt("JeffBezos")));
module.exports = convertToInt;