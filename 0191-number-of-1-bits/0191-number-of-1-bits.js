/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const bits = n.toString(2);

    let oneCount = 0;
    Array.from(bits).forEach(num => {
        if (num === "1") {
            oneCount++;
        }
    })

    return oneCount;
};