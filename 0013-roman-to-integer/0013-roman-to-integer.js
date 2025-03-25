/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let returnValue = 0;

    const value = new Map()
    value.set('I', 1);
    value.set('V', 5);
    value.set('X', 10);
    value.set('L', 50);
    value.set('C', 100);
    value.set('D', 500);
    value.set('M', 1000);

    const strArray = s.split("").reverse();
    let beforeValue = 0;

    for (str of strArray) {
        if (value.get(str) < beforeValue) {
            returnValue -= value.get(str);
        } else {
            returnValue += value.get(str);
        }
        
        beforeValue = value.get(str);
    }

    return returnValue
};