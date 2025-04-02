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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    let leftCnt = 0;
    let rightCnt = 0;
    let nodeBalanced = true;

    function dfs(node) {
        if (!node) {
            return 0;
        }
        const left = dfs(node.left);
        const right = dfs(node.right)

        if (Math.abs(left - right) > 1) {
            nodeBalanced = false;
        }

        return Math.max(left, right) + 1;
    }

    if (root.left) {
        leftCnt = dfs(root.left);
    }
    if (root.right) {
        rightCnt = dfs(root.right);
    }

    if (!nodeBalanced) {
        return false;
    }
    return Math.abs(leftCnt - rightCnt) < 2;
};