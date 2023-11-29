//Diameter of Tree --- Longest distance between two nodes of the tree
//Diameter of the tree can pass through the root node or it can be only in Left Subtree or Right Subtree
//There are three Cases

//Case I --- The diameter of the tree is in the Left Subtree
//Case II --- The diameter of the tree is in the Right Subtree
//Case III --- The diameter of the tree goes through the root node which will be ( HeightOfLeftSubtree + HeightOfRightSubtree + 1 )

//So we will have diameter of all the three cases Max of all the tree cases will be the Diameter of the Tree

//There are two approaches to find the diameter of the tree
//Approach I takes the Big O of n square time complexity --- It finds the diameter and height differently which would take the node to revisit two times
//Approach II take the linear time complexity --- It finds the Diameter and Height simultaneously

//Dimatere of Tree = Math.max(Diameter of Left Subtree, Diameter of Right Subtree, Height of the Node)

const TreeNode = [1,2,4,-1,-1, 5, -1, -1, 3, -1, 6, -1, -1]

class Node{
    constructor(element){
        this.data = element;
        this.left = null
        this.right = null
    }
}


class TreeInfo{
    constructor(ht, dia){
        this.height  = ht;
        this.diameter = dia;
    }
}

class BinaryTree{
    constructor(){
        this.idx = -1;
    }

    createTree(nodeArray){
        ++this.idx

        if(nodeArray[this.idx] === -1){
            return null
        }

        const newNode = new Node(nodeArray[this.idx]);
        newNode.left = this.createTree(nodeArray)
        newNode.right = this.createTree(nodeArray)

        return newNode;
    }

    heightOfTree(root){
        if(root === null){
            return 0
        }

        const leftHeight = this.heightOfTree(root.left)
        const rightHeight = this.heightOfTree(root.right)

        return Math.max(leftHeight, rightHeight) + 1
    }

    // APPROACH 1 O(n^2)
    //Height has been calculate seperately with diamter, so it is approaching to n square approach
    diameterOfTree(root){
        if(root === null){
            return 0;
        }
        const leftSubTreeDiameter = this.diameterOfTree(root.left)
        const rightSubTreeDiameter = this.diameterOfTree(root.right)
        const diameterThroughRootNode = this.heightOfTree(root.left) + this.heightOfTree(root.right) + 1;

        return Math.max(leftSubTreeDiameter, rightSubTreeDiameter, diameterThroughRootNode);
    }

    //APPROACH 2 O(n)
    optimisedDiameterOfTree(root){

        if(root === null){
            return new TreeInfo(0,0)
        }
        
        const leftSubtreeInfo = this.optimisedDiameterOfTree(root.left)
        const rightSubtreeInfo = this.optimisedDiameterOfTree(root.right)


        const leftSubTreeDiamter = leftSubtreeInfo.diameter
        const rightSubTreeDiamter = rightSubtreeInfo.diameter
        const diameterThroughRootNode = leftSubtreeInfo.height + rightSubtreeInfo.diameter + 1;

        const DiameterOfTree = Math.max(leftSubTreeDiamter, rightSubTreeDiamter, diameterThroughRootNode);


        const heightOfTree = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;

        return new TreeInfo(heightOfTree, DiameterOfTree)

    }   
}

const Tree = new BinaryTree();

console.log("Binary Tree");
const myBinaryTree = Tree.createTree(TreeNode)
console.log(myBinaryTree);

console.log("Diameter of Tree");
const diameter = Tree.diameterOfTree(myBinaryTree)
console.log(diameter);

console.log("Optimized Dimater");
const optimizedDimater = Tree.optimisedDiameterOfTree(myBinaryTree)
console.log(optimizedDimater);