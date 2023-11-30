const TreeNode = [1,2,4,-1,-1, 5, -1, -1, 3, -1, 6, -1, -1]

class Node{
    constructor(ele){
        this.data = ele;
        this.left = null;
        this.right = null;
    }
}


class Tree{
    constructor(){
        this.tree = null;
        this.idx = -1   
    }    

    createTree(nodeArr){
        ++this.idx;

        if(nodeArr[this.idx] === -1){
            return null
        }

        const newNode = new Node(nodeArr[this.idx])

        newNode.left = this.createTree(nodeArr)
        newNode.right = this.createTree(nodeArr)

        return newNode;
    }

    isSubTree(rootNode, subTree){
        if(subTree === null){
            return true;
        }

        if(rootNode === null){
            return false;
        }

        if(rootNode.data === subTree.data){
            return this.isIdentical(rootNode, subTree)
        }

        return this.isSubTree(rootNode.left, subTree) || this.isSubTree(rootNode.right, subTree);
    }

    isIdentical(rootNode, subTree){
        if(rootNode === null && subTree === null){
            return true;
        }
       
        if(rootNode === null || subTree === null){
            return false;
        }

        if(rootNode.data === subTree.data){
            return this.isIdentical(rootNode.left, subTree.left)  && this.isIdentical(rootNode.right, subTree.right)
        }

        return false;
    }
    

}


const BinaryTree = new Tree();
const myBinaryTree = BinaryTree.createTree(TreeNode)

console.log(myBinaryTree);

const subTreeArr = [2,4,-1,-1,5,-1,-1]
const subBinaryTree = new Tree;
const subTree = subBinaryTree.createTree(subTreeArr);


const checkIsSubTree = BinaryTree.isSubTree(myBinaryTree, subTree)
console.log(checkIsSubTree);