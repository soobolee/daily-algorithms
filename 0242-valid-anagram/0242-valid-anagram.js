/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const sHash = getCharAnagram(s);
    const tHash = getCharAnagram(t);

    if (sHash.size !== tHash.size) {
        return false;
    }

    for (const key of sHash.keys()) {
        if (!tHash.has(key)) {
            return false;
        }

        if (sHash.get(key) !== tHash.get(key)) {
            return false;
        }
    }

    return true;
};

const getCharAnagram = function(string) {
    const hash = new Map();
    const charArray = string.split("");

    for (const char of charArray) {
        if (hash.has(char)) {
            let charCount = hash.get(char);
            hash.set(char, ++charCount);
        } else {
            hash.set(char, 1);
        }
    }

    return hash;
}