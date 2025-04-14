/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [];

    for (let i = 0; i <= n; i++) {
        const bit = i.toString(2);

        let sum = 0;
        Array.from(bit).forEach((num) => {
            if (num === "1") {
                sum += 1;
            }
        })

        res.push(sum);
    }

    return res;
};