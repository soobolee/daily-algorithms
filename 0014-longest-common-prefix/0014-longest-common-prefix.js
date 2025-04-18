/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const prefixCounter = {};
    let commonPrefix = "";

    let i = 0;
    let j = 0;
    while (true) {
        if (!strs[i][j]) {
            break;
        }
        const current = strs[i][j];

        prefixCounter[current] = (prefixCounter[current] || 0) + 1;

        i++;

        if (i === strs.length) {
            if (prefixCounter[current] === strs.length) {
                commonPrefix += current;
            } else {
                break;
            }
            delete prefixCounter[current];

            i = 0;
            j++;
        }
    }

    return commonPrefix;
};