class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(arr){
        this.root = null;
        this.bstArr = arr;
    }

    insert(rootNode, val){
        if(rootNode === null){
            rootNode = new Node(val)
            return rootNode;
        }

        if(rootNode.value > val){
            //Left
            rootNode.left = this.insert(rootNode.left, val)
        }
        else{
            rootNode.right = this.insert(rootNode.right, val)
        }

        return rootNode;
    }

    createBST(){
        for(let i =0; i< this.bstArr.length; i++){
            this.root = this.insert(this.root, this.bstArr[i])
        }

        return this.root;
    }

    inOrderTraversal(node, inorderArr = []){
        if(node === null){
            return inorderArr
        }

        this.inOrderTraversal(node.left, inorderArr)
        inorderArr.push(node.value)
        this.inOrderTraversal(node.right, inorderArr)

        return inorderArr
    }

    // Search
    searchKey(node, key){
        if(node === null){
            return false
        }

        if(node.value > key){
            return this.searchKey(node.left, key)
        }
        else if(node.value < key){
            return this.searchKey(node.right, key)
        }
        else{
            return true
        }
    }
}

const BST_Tree =  new BST([5,1,3,4,2,7]) 
const binaryTree =   BST_Tree.createBST();
console.log(binaryTree);
const SortedArr = BST_Tree.inOrderTraversal(binaryTree)
console.log(SortedArr);
const hasKey = BST_Tree.searchKey(binaryTree, 6)
console.log(hasKey);

