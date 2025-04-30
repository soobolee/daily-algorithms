/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sHash = {};
    const tHash = {};

    for (let i = 0; i < s.length; i++) {
        sHash[s[i]] = (sHash[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        tHash[t[i]] = (tHash[t[i]] || 0) + 1;
    }

    for (const key of Object.keys(sHash)) {
        if (!tHash[key] || sHash[key] !== tHash[key]) {
            return false;
        }
    }

    return true;
};