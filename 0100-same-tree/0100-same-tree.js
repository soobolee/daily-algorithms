/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const validSame = function(pNode, qNode) {
        if (pNode === null && qNode === null) {
            return true;
        }

        if (pNode === null || qNode === null) {
            return false;
        }

        if (pNode.val !== qNode.val) {
            return false;
        }

        const isLeftSame = validSame(pNode.left, qNode.left);
        const isRightSame = validSame(pNode.right, qNode.right);

        return isLeftSame && isRightSame;
    }

    return validSame(p, q);
};