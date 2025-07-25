from collections import deque;

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class Tree:
    def __init__(self):
        self.idx = -1
    
    def buildTree(self, nodeArr):
        self.idx += 1

        if(nodeArr[self.idx] == -1):
            return None
        
        node = Node(nodeArr[self.idx])
        node.left =  self.buildTree(nodeArr)
        node.right =  self.buildTree(nodeArr)

        return node
    
    def printPreOrder(self, node):
        if(node is None):
            return

        print(node.data)
        self.printPreOrder(node.left)
        self.printPreOrder(node.right)

    def printInOrder(self, node):
        if(node == None):
            return
        
        self.printInOrder(node.left)
        print(node.data)
        self.printInOrder(node.right)

    def printPostOrder(self, node):
        if(node == None):
            return
        
        self.printPostOrder(node.left)
        self.printPostOrder(node.right)
        print(node.data)

    def printLevelOrder(self, root):
        if root is None:
            return
        
        queue = deque([root])
        
        while queue:
            node = queue.popleft()
            print(node.data)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)


treeNode = [1,2,4,-1,-1, 5, -1, -1, 3, -1, 6, -1, -1] #PreOrder Array
 
binaryTree = Tree()
tree = binaryTree.buildTree(treeNode)

print("PreOrder")
binaryTree.printPreOrder(tree)

print("InOrder")
binaryTree.printInOrder(tree)

print("PostOrder")
binaryTree.printPostOrder(tree)

print("LevelOrder")
binaryTree.printLevelOrder(tree)
        