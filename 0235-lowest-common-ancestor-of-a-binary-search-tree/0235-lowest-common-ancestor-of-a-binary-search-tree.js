/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function dfs(node) {
        if (!node || node.val === p.val || node.val === q.val) {
            return node;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left && right) {
            return node;
        }

        return left || right;
    }

    return dfs(root);
};