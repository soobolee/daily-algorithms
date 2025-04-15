/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let oneCount = 0;
    let num = n;

    while (num > 0) {
        if (num & 1) {
            oneCount++;
        }

        num = num >> 1;
    }

    return oneCount;
};