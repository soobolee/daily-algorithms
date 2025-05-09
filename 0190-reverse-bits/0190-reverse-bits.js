/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const binary = n.toString(2).padStart(32, '0');
  const reversed = binary.split('').reverse().join('');

  return parseInt(reversed, 2);
};