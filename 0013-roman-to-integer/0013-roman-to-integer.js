/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let returnValue = 0;

    const strToInt = {
    I: 1, V: 5, X: 10,
    L: 50, C: 100,
    D: 500, M: 1000
    };

    const strArray = s.split("").reverse();
    let beforeValue = 0;

    for (const str of strArray) {
        if (strToInt[str] < beforeValue) {
            returnValue -= strToInt[str];
        } else {
            returnValue += strToInt[str];
        }
        
        beforeValue = strToInt[str];
    }

    return returnValue
};