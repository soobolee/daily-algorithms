/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const defaultColor = image[sr][sc];
    if (defaultColor === color) {
        return image;
    }

    const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    function dfs(sr, sc) {
        if (!image[sr] || image[sr][sc] !== defaultColor) {
            return;
        }

        if (image[sr][sc] === defaultColor) {
            image[sr][sc] = color;
        }

        for (const rc of direction) {
            dfs(sr + rc[0], sc + rc[1]);
        }
    }

    dfs(sr, sc);
    return image;
};