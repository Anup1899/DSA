//Follows PreOrder Sequence

class Node{
    constructor(ele){
        this.value = ele;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(nodeArr){
        this.root = null
        this.bstArr = nodeArr;
    }

    insertInBST(rootNode, val) {
        if (rootNode === null) {
          const newNode = new Node(val);
          rootNode = newNode;
          return rootNode;
        }
    
        if (rootNode.value > val) {
          rootNode.left = this.insertInBST(rootNode.left, val);
        } else {
          rootNode.right = this.insertInBST(rootNode.right, val);
        }
    
        return rootNode;
      }
    
      createBST() {
        for (let i = 0; i < this.bstArr.length; i++) {
          this.root = this.insertInBST(this.root, this.bstArr[i]);
        }
    
        return this.root;
      }
    
      inOrderTraversal(node = this.root, arr = []) {
        if (node === null) {
          return arr;
        }
    
        this.inOrderTraversal(node.left, arr);
        arr.push(node.value);
        this.inOrderTraversal(node.right, arr);
    
        return arr;
      }

      rootToLeaf(node = this.root, arr = []){

        if(node === null){
            return
        }
        
        arr.push(node.value)
        if(node.left === null && node.right === null){
            let str = "";
            for(let i=0; i< arr.length; i++){
                str += arr[i] + "->"
            }

            console.log(str);
        }
        else{
            this.rootToLeaf(node.left, arr)
            this.rootToLeaf(node.right, arr)
        }
         //Removing the last Node
        arr.pop()

      }
}


const BinarySearchTree = new BST([5, 1, 3, 4, 2, 7]);
const myBST = BinarySearchTree.createBST();
console.log(myBST);
const inOrderTraversal = BinarySearchTree.inOrderTraversal();
console.log(inOrderTraversal);

const rootToLeafPath = BinarySearchTree.rootToLeaf()
// console.log(rootToLeafPath);