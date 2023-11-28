//To Calculate the height of the tree 
// We need to calculate the height of left subtree and the height of right subtree
// The Find the Maximum of both the tree
// Maximum( leftSubTree, rightSubTree )

const TreeNode = [1,2,4,-1,-1, 5, -1, -1, 3, -1, 6, -1, -1]

class Node{
    constructor(element){
        this.data = element;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.idx = -1
    }

    createTree(nodeArray){
        ++this.idx;

        if(nodeArray[this.idx] === -1){
            return null;
        }

        const newNode =  new Node(nodeArray[this.idx])
        
        newNode.left = this.createTree(nodeArray)
        newNode.right = this.createTree(nodeArray)

        return newNode
    }

    heightOfTheTree(root){

        if(root === null){
            return 0
        }

        const leftSubTree = this.heightOfTheTree(root.left)
        const rightSubTree = this.heightOfTheTree(root.right)

        return Math.max(leftSubTree, rightSubTree) + 1; 
    }
}


const Tree = new BinaryTree();

console.log("Binary Tree");
const myBinaryTree = Tree.createTree(TreeNode)
console.log(myBinaryTree);

console.log("Height of Binary Tree");
const heightOfBinaryTree = Tree.heightOfTheTree(myBinaryTree)
console.log(heightOfBinaryTree);