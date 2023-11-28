// Tree is a non-linear data structure where one node can be connected to multiple node
// IMPORTANT TREMS --- Node, Root, Child, Parent, Siblings, Ancsetors, Leaf Node
//Binary Tree -- Tree which <=2 children

//Level Order Traversal is called Breadth First Search (BFS)
    //BFS follows First In First Out (FIFO)
//PreOrder, PostOrder and InOrder Traversal is called Depth First Search (DFS)

const TreeNode = [1,2,4,-1,-1, 5, -1, -1, 3, -1, 6, -1, -1]

class Node{
    constructor(element){
        this.data = element
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    
    constructor(){
        this.tree = null;
        this.idx = -1;
    }

    buildTree(nodeArray){
        ++this.idx;

        if(nodeArray[this.idx] == -1){
            return null;
        }

        const newNode = new Node(nodeArray[this.idx]);
        newNode.left = this.buildTree(nodeArray)
        newNode.right = this.buildTree(nodeArray)
        
        return newNode;
    }

    //Root //Left Subtree //Right Subtree
    PreOrderTraversal(node, preOrderTraversalArray = []){
        if(node === null){
            preOrderTraversalArray.push(-1)
            return preOrderTraversalArray;
        }

        preOrderTraversalArray.push(node.data);
        // console.log(node.data);
        this.PreOrderTraversal(node.left, preOrderTraversalArray)        
        this.PreOrderTraversal(node.right, preOrderTraversalArray)   
        
        return preOrderTraversalArray;
        
    }

    //Left Subtree //Root //Right Subtree
    InOrderTraversal(node, inOrderTraversalArray = []){
        if(node === null){
            inOrderTraversalArray.push(-1)
            return inOrderTraversalArray
        }

        this.InOrderTraversal(node.left, inOrderTraversalArray)
        inOrderTraversalArray.push(node.data)
        this.InOrderTraversal(node.right, inOrderTraversalArray)

        return inOrderTraversalArray
    }

    //Left Subtree //Right Subtree //Root
    PostOrderTraversal(node, postOrderTraversalArray = []){
        if(node === null){
            postOrderTraversalArray.push(-1)
            return postOrderTraversalArray;
        }

        this.PostOrderTraversal(node.left, postOrderTraversalArray)
        postOrderTraversalArray.push(node.data)
        this.PostOrderTraversal(node.right, postOrderTraversalArray)

        return postOrderTraversalArray
    }

    //Level Order Traversal
        //Follows Queue Approach (FIFO)
    LevelOrderTraversal(root){
        const levelNodes = [];
        const queueArr = [root]
        queueArr.push(null)

        while(queueArr.length){
            const node = queueArr.shift();

            if(node === null){
                if(queueArr.length){
                    queueArr.push(null)
                    levelNodes.push(null)
                }
            }else{
                levelNodes.push(node.data);
                
                if(node.left) queueArr.push(node.left)
                if(node.right) queueArr.push(node.right)
            }


        }
        
        return levelNodes;
    }

}

const Tree = new BinaryTree()

console.log("Binary Tree");
const myBinaryTree = Tree.buildTree(TreeNode);
console.log(myBinaryTree);

console.log("PreOrder Tree");
const preOrderTraversalTree = Tree.PreOrderTraversal(myBinaryTree);
console.log(preOrderTraversalTree);

console.log("InOrder Tree");
const inOrderTraversalTree = Tree.InOrderTraversal(myBinaryTree);
console.log(inOrderTraversalTree);

console.log("PostOrder Tree");
const postOrderTraversalTree = Tree.PostOrderTraversal(myBinaryTree);
console.log(postOrderTraversalTree);

console.log("Level Order Tree");
const LevelOrderTraversalTree = Tree.LevelOrderTraversal(myBinaryTree);
console.log(LevelOrderTraversalTree);