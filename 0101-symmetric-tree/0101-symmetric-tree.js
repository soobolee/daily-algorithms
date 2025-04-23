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
function isSymmetric(root) {
  if (!root) {
    return true;
  }

  return isMirror(root.left, root.right);
}

function isMirror(t1, t2) {
  if (!t1 && !t2) {
    return true;
  }
  if (!t1 || !t2 || t1.val !== t2.val) {
    return false;
  }

  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}