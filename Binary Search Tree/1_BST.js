//Binary Search Tree --- It is Binary Tree which follows constraints to become binary tree
// Constraints ---
    //1. Left Subtree Node < Root
    //2. Right Subtree Node > Root
    //3. Left and Right Subtree are also BST with no duplicates (But Some defination also says BST with duplicates)

// Special Property
//1. InOrder Traversal in BST always gives a sorted array
//2. BST make search efficient
//3. Search Complexity of BST is O(H) --- Binary Search Login is used in BST to search node
//4. 90% of the problems will be solved by recursion

class Node{
    constructor(ele){
        this.value = ele;
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(arr){
        this.root = null;
        this.bstArr = arr;
    }

    insertInBST(rootNode ,val){
        if(rootNode === null){
            const newNode = new Node(val)
            rootNode = newNode;
            return rootNode;
        }

        if(rootNode.value > val){
            rootNode.left = this.insertInBST(rootNode.left, val)
        }
        else{
            rootNode.right = this.insertInBST(rootNode.right, val)
        }

        return  rootNode;
    }

    createBST(){
        for(let i=0; i<this.bstArr.length; i++){
            this.root = this.insertInBST(this.root, this.bstArr[i])
        }

        return this.root;
    }

    inOrderTraversal(node = this.root, arr=[]){
        if(node === null){
            return arr
        }

        this.inOrderTraversal(node.left, arr)
        arr.push(node.value)
        this.inOrderTraversal(node.right,arr)

        return arr
    }
}

const BinarySearchTree = new BST([5,1,3,4,2,7])
const myBST = BinarySearchTree.createBST()
console.log(myBST);
const inOrderTraversal = BinarySearchTree.inOrderTraversal()
console.log(inOrderTraversal);


