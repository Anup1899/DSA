class Node:
    def  __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class Stack:
    head = None
    
    def isEmpty(self):
        return self.head == None
    
    def push(self, data):
        newNode = Node(data)
        if(self.head == None):
            self.head = newNode
            return
        # Create New Node
        # Head.next = 
        # Current Head.next will be newnode
        # newNode will be head
        newNode.prev = self.head
        self.head.next = newNode
        self.head = newNode

    def pop(self):
        if(self.isEmpty()):
            return -1
        data = self.head.data
        self.head.prev.next = None
        self.head = self.head.prev
        return data

    def peek(self):
        if(self.isEmpty()):
            return -1
        return self.head.data
    
    def pushBottom(self, data):
        if(self.isEmpty()):
            self.push(data)
            return
        
        bottomNode = self.head
        while(bottomNode.prev != None):
            bottomNode = bottomNode.prev
        
        newNode = Node(data)
        newNode.next = bottomNode
        bottomNode.prev = newNode
    
    def printStack(self):
        pointer = self.head
        while(pointer):
            print(str(pointer.data))
            pointer = pointer.prev

        


stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

# print(stack.pop())
# print(stack.pop())
# print(stack.pop())

# stack.push(5)
# stack.push(6)
# stack.push(7)

stack.pushBottom(0)

stack.printStack()

# print(stack.pop())
# print(stack.pop())
# print(stack.pop())
# print(stack.pop())
# print(stack.pop())

# print(stack.peek())
