/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let shashCount = 0;
    let thashCount = 0;
    let sResult = "";
    let tResult = "";

    for (const str of Array.from(s).reverse()) {
        if (str === "#") {
            shashCount++;
            continue;
        }
        if (shashCount > 0) {
            shashCount--;
            continue;
        }

        sResult += str;
    }

        for (const str of Array.from(t).reverse()) {
        if (str === "#") {
            thashCount++;
            continue;
        }
        if (thashCount > 0) {
            thashCount--;
            continue;
        }

        tResult += str;
    }

    console.log(sResult);
    console.log(tResult);

    return sResult === tResult;
};