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
        const current = strs[i][j];

        if (!current) {
            break;
        }
        prefixCounter[current] = (prefixCounter[current] || 0) + 1;

        i++;

        console.log(prefixCounter[current]);
        if (i === strs.length) {
            if (prefixCounter[current] === strs.length) {
                commonPrefix += current;
            } else {
                break;
            }

            i = 0;
            j++;
        }
    }

    return commonPrefix;
};