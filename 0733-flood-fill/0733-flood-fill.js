/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    if (originalColor === color) {
        return image;
    }
    const direction = [[-1, 0], [0, -1], [0, 1], [1, 0]];

    const fill = function(i, j) {
        if (!image[i] || image[i][j] !== originalColor || image[i][j] === color) {
            return;
        }

        image[i][j] = color;

        for (const [r, c] of direction) {
            fill(i + r, j + c);
        }
    }
    
    fill(sr, sc);
    return image;
};