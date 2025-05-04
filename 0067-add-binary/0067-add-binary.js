/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const numa = parseInt(a, 2);
    const numb = parseInt(b, 2);
    const sum = numa + numb;

    return sum.toString(2);
};