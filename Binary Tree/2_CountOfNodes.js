// Count of Node 
// To get the count of nodes in a tree we need to get the count of Left subtree and right subtree and adding 1 to it
// Count of Left Subtree + Count of Right Subtree + 1


const TreeNode = [1,2,4,-1,-1, 5, -1, -1, 3, -1, 6, -1, -1]

class Node {
    constructor(element){
        this.data = element;
        this.left = null;
        this.right = null
    }
}

class BinaryTree{

    constructor(){
        this.tree = null;
        this.idx = -1;
    }

    createTree(nodeArray){
        ++this.idx;

        if(nodeArray[this.idx] === -1){
            return null
        }

        const newNode = new Node(nodeArray[this.idx])
        newNode.left = this.createTree(nodeArray)
        newNode.right = this.createTree(nodeArray)


        return newNode
    }

    countOfNode(tree){

        if(tree== null){
            return 0
        }

        const leftSubTreeCount = this.countOfNode(tree.left);
        const rightSubTreeCount = this.countOfNode(tree.right)

        return leftSubTreeCount + rightSubTreeCount + 1
    }
}


const myBinaryTree = new BinaryTree();

console.log("My Binary Tree");
const binaryTree =  myBinaryTree.createTree(TreeNode)
console.log(binaryTree);

console.log("Count of Nodes");
const totalNodes = myBinaryTree.countOfNode(binaryTree)
console.log(totalNodes);