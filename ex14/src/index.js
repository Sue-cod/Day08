function convertStrToInt(str) {
   return parseInt(str);
}
convertStrToInt("44");

console.log(parseInt(convertStrToInt("44")));
console.log(parseInt(convertStrToInt("27")));
console.log(parseInt(convertStrToInt("JeffBezos")));
module.exports = convertStrToInt;