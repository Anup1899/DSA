class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class Tree:
    def __init__(self, preOrderArr):
        self.preOrderArr = preOrderArr
        self.tree = None
        self.idx = -1
    
    def __createTree(self):
        self.idx += 1
        if(self.preOrderArr[self.idx] == -1):
            return None
        
        newNode = Node(self.preOrderArr[self.idx])
        newNode.left = self.__createTree()
        newNode.right = self.__createTree()

        return newNode
    
    def assignTree(self):
        self.tree = self.__createTree()
    
    def printTreeNode(self, treeNode= -1):
        if(treeNode == None):
            return
        
        if(treeNode == -1):
            treeNode = self.tree
        
        print(treeNode.data)
        self.printTreeNode(treeNode.left)
        self.printTreeNode(treeNode.right)
        


preOrderArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1]   
tree = Tree(preOrderArray)
tree.assignTree()
tree.printTreeNode()
# myTree = tree.tree
# print(myTree.right.right.right.data)




