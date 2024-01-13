function generator(isLower, isUpper, isNum, isSp, len) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    const spchars = "~!@#$%^&*()_-+={}[]:;?/>.<,";
    const numbers = "1234567890";

    let resString = "";

    resString += isLower ? lowercase : "";
    resString += isUpper ? uppercase : "";
    resString += isNum ? numbers : "";
    resString += isSp ? spchars : "";

    if (len === 0) {
        console.log("Length must be more than 1!");
    } else {
        let ans = "";
        for (let i = 0; i < len; i++) {
            const k = Math.floor(Math.random() * resString.length);
            ans += resString[k];
        }

        console.log(ans);
    }
}

generator(true, true, true, false, 12);
