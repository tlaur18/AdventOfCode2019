var start = 108457;
var end = 562041;
var validPasswords = [];

for (let i = start; i <= end; i++) {
    asArray = i
        .toString(10)
        .split("")
        .map(Number); //Make number an array of digits.
    doubleDigits = false;
    neverDecrease = true;

    var sameDigitsArray = [asArray[0]];
    for (let j = 1; j < asArray.length; j++) {
        prevNum = asArray[j - 1];
        currentNum = asArray[j];

        if (prevNum == currentNum) {
            sameDigitsArray.push(currentNum);
        } else {
            if (sameDigitsArray.length == 2) {
                doubleDigits = true;
            }
            sameDigitsArray = [currentNum];
        }
        if (prevNum > currentNum) {
            neverDecrease = false;
        }
    }

    //Needed when the pair is in the end of the password.
    if (sameDigitsArray.length == 2) {
        doubleDigits = true;
    }

    if (doubleDigits && neverDecrease) {
        validPasswords.push(i);
        console.log(i);
    }
}

console.log(validPasswords.length);
