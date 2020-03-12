module.exports = function check(string, bracketsConfig) {
  let brackets = []; // we create a new array

  for (let i = 0; i < bracketsConfig.length; i++) { // for every item in bC
    brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]); //
  }
  for (let i = 0; i < string.length; i++) {  // for every item in string
    for (let j = 0; j < brackets.length; j++) { // and evert item in new array
      string = string.replace(brackets[j], ""); // we cross out the found bracket
    }
    if (string.length == 0) { // if nothing was added, the string matches
      return true;
    }
  }
  return false; // if was, then it doesnt
}