// Deleting Node from BST has Three Casee

//Case I
// Delete Leaf Node

//Case II
// Delete the Node has only one child

// Case III   ---- IMPORTANT
// Delete the node with two children
// Replace the node with InOrder Successor
// Delete the node for Inorder Successor
// InOrder Successor means the very next element after the node which we get from the InOrder Traversal
// Example Inorder Traversal of BST = [1,2,3,4,7]
// If we want to delete the 2 then InOrder Successor will be 3
// So we need to replace the element with InOrder Successor and delete the element
// Inorder Successor Element will always present in the Right Subtree
// Inorder Successor Element = Extreme Left of the Right SubTree


// Delete the node of Inorder Successor
//There can only be to Case to delete the node of InOrder Successor Element
// Which are i) One Right Child ii) No Child

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(nodeArr) {
    this.root = null;
    this.bstArr = nodeArr;
  }

  insertNode(rootNode, val) {
    if (rootNode === null) {
      return new Node(val);
    }

    if (rootNode.value > val) {
      //Left
      rootNode.left = this.insertNode(rootNode.left, val);
    } else {
      //Rigth
      rootNode.right = this.insertNode(rootNode.right, val);
    }
    return rootNode;
  }

  createBST() {
    for (let i = 0; i < this.bstArr.length; i++) {
      this.root = this.insertNode(this.root, this.bstArr[i]);
    }
    return this.root;
  }

  inOrderTraversal(rootNode = this.root, arr = []) {
    if (rootNode === null) {
      return arr;
    }

    this.inOrderTraversal(rootNode.left, arr);
    arr.push(rootNode.value);
    this.inOrderTraversal(rootNode.right, arr);

    return arr;
  }

  deletNode(key, rootNode = this.root) {
    if (rootNode.value > key) {
      rootNode.left = this.deletNode(key, rootNode.left);
    } else if (rootNode.value < key) {
      rootNode.right = this.deletNode(key, rootNode.right);
    } else {
      //rootNode.value === key

      //Case I Deleting the Leaf Node
      if (rootNode.left === null && rootNode.right === null) {
        return null;
      }

      //Case II Delete the Node with only one child
      if (rootNode.left === null) {
        return rootNode.right; 
      }

      if (rootNode.right === null) {
        return rootNode.left;
      }

      //Case III Deleting Node having two children
      const IS = this.searchLeftMostNode(rootNode.right);
      rootNode.value = IS.value;
      rootNode.right = this.deletNode(IS.value, rootNode.right)
    }

    return rootNode;
  }

  searchLeftMostNode(rootNode) {
   while(rootNode.left !== null){
    rootNode = rootNode.left
   }
   return rootNode
  }
}

const BST_Tree = new BST([8,5,3,1,4,6,10,11,14]);
const binaryTree = BST_Tree.createBST();
console.log(binaryTree);
const SortedArr = BST_Tree.inOrderTraversal(binaryTree);
console.log(SortedArr);

BST_Tree.deletNode(5);

const DeleteArr = BST_Tree.inOrderTraversal(binaryTree);
console.log(DeleteArr);
