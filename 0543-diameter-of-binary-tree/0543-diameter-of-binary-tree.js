/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function dfs(node) {
        if (!node) {
            return 0;
        };
        let left = 0;
        let right = 0;
        if (node.left) {
            left = dfs(node.left);
        }
        if (node.right) {
            right = dfs(node.right);
        }

        diameter = Math.max(diameter, left + right);
 
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return diameter;
};