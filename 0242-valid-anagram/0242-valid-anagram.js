/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sHash = getCharAnagram(s);
    const tHash = getCharAnagram(t);

    for (const key of Object.keys(sHash)) {
        if (!tHash[key]) {
            return false;
        }

        if (sHash[key] !== tHash[key]) {
            return false;
        }
    }

    return true;
};

const getCharAnagram = function(string) {
    const hash = {};
    const charArray = string.split("");

    for (const char of charArray) {
        if (char in hash) {
            let charCount = hash[char];
            hash[char] = ++charCount;
        } else {
            hash[char] = 1;
        }
    }

    return hash;
}