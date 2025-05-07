/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const executeBackSpace = function(str) {
        const executeList = [];

        for (const s of str) {
            if (s === "#") {
                executeList.pop();
                continue;
            }

            executeList.push(s);
        }
        return executeList.join("");
    }

    return executeBackSpace(s) === executeBackSpace(t);
};