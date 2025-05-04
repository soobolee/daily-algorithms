/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aArray = a.split("").reverse();
    const bArray = b.split("").reverse();
    const longLength = Math.max(aArray.length, bArray.length)
    let result = "";
    let carry = 0;

    for (let i = 0; i < longLength; i++) {
        const numA = Number(aArray[i]) || 0;
        const numB = Number(bArray[i]) || 0;

        const addRes = numA + numB + carry;

        if (addRes >= 2) {
            carry = 1;
            result = (addRes - 2) + result;
        } else {
            carry = 0;
            result = addRes + result;
        }
    }

    return carry > 0 ? "1" + result : result;
};