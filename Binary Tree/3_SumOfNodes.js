const TreeNode = [1,2,4,-1,-1, 5, -1, -1, 3, -1, 6, -1, -1]

class Node{
    constructor(element){
        this.data = element
        this.left = null;
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.tree = null;
        this.idx = -1
    }

    createTree(nodeArray){

        ++this.idx;

        if(nodeArray[this.idx] === -1){
            return null
        }

        const newNode = new Node(nodeArray[this.idx])
        newNode.left = this.createTree(nodeArray)
        newNode.right = this.createTree(nodeArray)

        return newNode;
    }

    sumOfNode(root){
        if(root === null){
            return 0
        }

        const leftSubTree = this.sumOfNode(root.left)
        const rightSubTree = this.sumOfNode(root.right)
        
        return  leftSubTree + rightSubTree +root.data


    }
}



const Tree = new BinaryTree();

console.log("Binary Tree");
const myBinaryTree = Tree.createTree(TreeNode)
console.log(myBinaryTree);

console.log("Sum of Data");
const sumOfNodesInTree = Tree.sumOfNode(myBinaryTree)
console.log(sumOfNodesInTree);