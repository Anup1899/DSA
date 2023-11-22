//Circular Linked List only requires Tail

class Node{
    constructor(element){
        this.element = element;
        this.next  = null;
    }
}

class CircularSinglyLinkedList{

    constructor(){
        this.tail = null;
    }

    //InsertAtTail
    InsertAtTail(element){
        const newNode = new Node(element)

        if(!this.tail){
            this.tail = newNode
            newNode.next = newNode;
            return
        }

        newNode.next = this.tail.next;
        this.tail.next = newNode;
        this.tail = newNode

        return


    }

    //InsertAtTheMiddle
    InsertAtTheMiddle(element, prevNodeData){
        const node = this.findNode(this.tail, prevNodeData)

        //Insert At Tail 
        if(node.element === this.tail.element){
            this.InsertAtTail(element)
        }

        const newNode = new Node(element);

        newNode.next = node.next;
        node.next = newNode;

        return;
    }

    //DeleteNode
    DeleteNode(element){
        if(!this.tail){
            return "List is Empty"
        }

        const previousNode = this.findPrevNode(this.tail, element);

        //Delete Single Item
        if(previousNode.element === previousNode.next.element){
            this.tail = null
            return;
        }

        //Delete At Tail
        if(previousNode.next.element === this.tail.element){
            previousNode.next = this.tail.next;
            this.tail = previousNode;
            return  
        }

        //Delet At Middle
        previousNode.next = previousNode.next.next;

        return

        
        
    }

    findPrevNode(currentNode,data){
        if(currentNode.next.element === data){
            return currentNode;
        }

        return this.findPrevNode(currentNode.next, data)
    }

    findNode(currentNode, data){
        if(currentNode.element === data){
            return currentNode
        }

        return this.findNode(currentNode.next, data);

    }
}

const LinkedList = new CircularSinglyLinkedList()

LinkedList.InsertAtTail(10);
LinkedList.InsertAtTail(20);
LinkedList.InsertAtTail(40);

LinkedList.InsertAtTheMiddle(30, 20)
LinkedList.InsertAtTheMiddle(50, 40)
LinkedList.InsertAtTheMiddle("A", 30)


console.log("Tail");
console.log(LinkedList.tail);

console.log("Node");
console.log(LinkedList.tail.next);
console.log(LinkedList.tail.next.next);
console.log(LinkedList.tail.next.next.next);
console.log(LinkedList.tail.next.next.next.next);
console.log(LinkedList.tail.next.next.next.next.next);
console.log(LinkedList.tail.next.next.next.next.next.next);

// LinkedList.DeleteNode(10)
// LinkedList.DeleteNode(20)
// LinkedList.DeleteNode(30)
// LinkedList.DeleteNode("A")
// LinkedList.DeleteNode(40)
// LinkedList.DeleteNode(50)
console.log("Deleted Node");

// console.log(LinkedList.tail.next);
// console.log(LinkedList.tail.next.next);
// console.log(LinkedList.tail.next.next.next);
// console.log(LinkedList.tail.next.next.next.next);
// console.log(LinkedList.tail.next.next.next.next.next);
// console.log(LinkedList.tail.next.next.next.next.next.next);


console.log("Tail");
console.log(LinkedList.tail);