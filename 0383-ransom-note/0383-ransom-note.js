/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineMap = {};

    for (const str of magazine.split("")) {
        let count = magazineMap[str];
        if (count) {
            count++;
            magazineMap[str] = count;
        } else {
            magazineMap[str] = 1;
        }
    }

    console.log(magazineMap);
    for (const str of ransomNote.split("")) {
        if (!magazineMap[str] || magazineMap[str] < 1) {
            return false;
        }
        magazineMap[str]--;
    }

    return true;
};