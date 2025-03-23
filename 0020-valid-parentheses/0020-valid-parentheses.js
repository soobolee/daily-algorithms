/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const strArray = s.split("");

    for (let i = 0; i < strArray.length; i++) {
        const str = strArray[i];

        if (str === "(" || str === "{" || str === "[") {
            stack.push(str);
        } else {
            if (stack.length < 1) {
                return false;
            }

            const minusAscii = str.charCodeAt() - stack[stack.length - 1].charCodeAt();

            if (Math.abs(minusAscii) <= 2) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};