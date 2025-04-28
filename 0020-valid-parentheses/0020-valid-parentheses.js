/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const validArray = [];

    for (let i = 0; i < s.length; i++) {
        const lastValue = validArray[validArray.length - 1];

        if (lastValue) {
            if (lastValue === "(" && s[i] === ")") {
                validArray.pop();
                continue;
            }
            if (lastValue === "{" && s[i] === "}") {
                validArray.pop();
                continue;
            }
            if (lastValue === "[" && s[i] === "]") {
                validArray.pop();
                continue;
            }

            validArray.push(s[i]);
        } else {
            validArray.push(s[i]);
        }
    }

    return validArray.length === 0;
};