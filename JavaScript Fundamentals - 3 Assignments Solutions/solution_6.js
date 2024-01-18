function reversedString(inputString){
    let stringArr = inputString.split("");
    let stringReverse = stringArr.reverse()
    let outputString = stringReverse.join("");
    return outputString;
}

console.log(reversedString('now'));