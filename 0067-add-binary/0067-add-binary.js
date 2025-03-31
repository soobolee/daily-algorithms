/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aArray = a.split("").reverse();
    const bArray = b.split("").reverse();
    const longLength = aArray.length > bArray.length ? aArray.length : bArray.length;
    let addBinary = "";
    let two = 0;

    for (let i = 0; i < .length; i++) {
        const numA = Number(aArray[i]) || 0;
        const numB = Number(bArray[i]) || 0;

        const addRes = numA + numB + two;

        if (addRes >= 2) {
            two = 1;
            addBinary = (addRes - 2) + addBinary;
        } else {
            two = 0;
            addBinary = addRes + addBinary;
        }
    }

    return two > 0 ? "1" + addBinary : addBinary;
};