/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
	const sArray = s.split("").sort();
	const tArray = t.split("").sort();
	
	return sArray.join("") === tArray.join("")
};
