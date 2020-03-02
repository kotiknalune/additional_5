module.exports = function check(string, bracketsConfig) {
    const parenthesis = "[]{}()";
    
    let bracketsArray = [], 
        location, i, j;

    for (i = 0; j = string[i]; i++) {
        
        location = parenthesis.indexOf(j);

        if (location === -1) {
            continue;
        }

        if (location % 2 === 0) {
           bracketsArray.push(location + 1);
        } else {
            
            if (bracketsArray.pop() !== location) {
                return false;
            }
        }
    }
    return bracketsArray.length === 0;
}
