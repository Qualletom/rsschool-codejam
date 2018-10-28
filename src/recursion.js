module.exports = (tree) => {
  const result = [];
  const handleBinaryTree = (treeNode, level = 0) => {
    if (!treeNode) return;
    if (!result[level]) {
      result[level] = [];
    }
    result[level].push(treeNode.value);
    handleBinaryTree(treeNode.left, level + 1);
    handleBinaryTree(treeNode.right, level + 1);
  };
  handleBinaryTree(tree);
  return result;
};
