// 创建tree结构
function TreeNode(n) {
    this.val = n
    this.left = this.right = null
}


// 关于二叉搜索树，需要掌握的高频操作：  
// 1、查找数据域为某一特定值的结点
// 2、插入新结点
// 3、删除指定结点

function search(root, n) {
    // 若 root 为空，查找失败，直接返回
    if (!root) {
        return
    }
    // 找到目标结点，输出结点对象
    if (root.val === n) {
        return root
    }
    if (root.val > n) {
        // 当前结点数据域大于n,向左查找
        search(root.left, n)
    }else {
        // 当前结点数据域小于n，向右查找
        search(root.right, n)
    }
} 



// 插入结点

function insertBST(root, n) {
    if (!root) {
        // 此时，就是结点插入的位置
        root = new TreeNode(n)
        return root
    }
    if (root.val > n) {
        // 当前结点数据域大于n,向左查找
        root.left = insertBST(root.left, n)
    }else {
        // 当前结点数据域大于n，向右查找
        root.right = insertBST(root.right, n)
    }
    // 返回插入后的二叉搜索树
    return root
}



// 删除指定结点
// 需要考虑的情况比较多
// 1、结点不存在，定位到了空节点，直接返回即可
// 2、需要删除的结点既没有左孩子也没有右孩子---它是一个叶子结点，这种情况直接删除即可
// 3、需要删除的结点存在左子树，那么就去左子树里寻找小于目标结点值的最大结点，用这个结点覆盖目标结点
// 4、需要删除的结点存在右子树，那么就去左子树里寻找大于目标结点值的最小结点，用这个结点覆盖目标结点
// 5、需要删除的结点既有左子树、又有右子树，这时就有两种做法：要么取左子树中值最大的结点，要么取右子树中最小的结点。两个结点中任取一个覆盖目标结点，都可以维持二叉搜索树的数据有序性

function deleteNode(root, n) {
    if (!root) {
        return root
    }
    if (root.val === n) {
        if (root.left === null && root.right === null) {
            root = null
        }else if (root.left) {
            // 寻找左子树里值最大的结点
            const maxLeft = findMax(root.left)
            // 覆盖需要删除的当前结点
            root.val = maxLeft.val
            // 覆盖动作会消耗掉原有的maxLeft结点
            root.left = deleteNode(root.left, maxLeft.val)
        }else {
            // 寻找右子树里最小的结点
            const minRight = findMin(root.right)
            // 用这个 minRight 覆盖掉需要删除的当前节点
            root.val = minRight.val
            // 覆盖动作会消耗掉原有的 minRight 结点
            root.right = deleteNode(root.right, minRight.val)
        }
    }else {
        if (root.val > n) {
            root.left = deleteNode(root.left, n)
        }else {
            root.right = deleteNode(root.right, n)
        }
    }
    return root
}

// 寻找左子树最大值
function findMax(root) {
    while(root.right) {
        root = root.right
    }
    return root
} 
// 寻找右子树的最小值
function findMin(root) {
    while(root.left) {
        root = root.left
    }
    return left
}