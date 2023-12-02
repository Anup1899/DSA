// (X,Y) Range and Value
// Y < Root --> Search in Left tree
// X > Root --> Search in Right tree
// X < Root < Y --> Search in Left and Right Tree

class Node {
  constructor(ele) {
    this.value = ele;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(arr) {
    this.root = null;
    this.bstArr = arr;
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

  printInRange(X, Y, rootNode = this.root, rangeArr=[]){

    if(rootNode === null){
        return rangeArr
    }

    if(Y < rootNode.value){
        this.printInRange(X, Y, rootNode.left, rangeArr)
    }
    
    if(X > rootNode.value){
         this.printInRange(X, Y, rootNode.right, rangeArr)
    }

    if(X <= rootNode.value && rootNode.value <= Y){
        this.printInRange(X, Y, rootNode.left, rangeArr)
        rangeArr.push(rootNode.value)
        this.printInRange(X, Y, rootNode.right, rangeArr)

    }

    return rangeArr

  }
}

const BinarySearchTree = new BST([5, 1, 3, 4, 2, 7]);
const myBST = BinarySearchTree.createBST();
console.log(myBST);
const inOrderTraversal = BinarySearchTree.inOrderTraversal();
console.log(inOrderTraversal);

const print = BinarySearchTree.printInRange(3, 5)
console.log(print);
