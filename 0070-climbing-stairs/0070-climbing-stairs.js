/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) {
        return n;
    }

    const stairs = new Array(n + 1).fill(0);
    stairs[1] = 1;
    stairs[2] = 2;
    stairs[3] = 3;

    for (let i = 3; i <= n; i++) {
        stairs[i] = stairs[i - 1] + stairs[i - 2];
    }

    return stairs[n];
};