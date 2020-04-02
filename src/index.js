module.exports = function check(string, bracketsConfig) {
  let brackets = []; str = string; // we create a new array

  for (let i = 0; i < bracketsConfig.length; i++) { // for every item in bC
    brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]); // flatten config
  }
  for (let i = 0; i < string.length; i++) {  // for every item in string
    for (let j = 0; j < brackets.length; j++) { // and evert item in new array
      str = str.replace(brackets[j], ""); // we cross out the found bracket
    }
    if (str.length == 0) { // if nothing was added, the string matches
      return true;
    }
  }
  return false; // if was, then it doesnt
}
