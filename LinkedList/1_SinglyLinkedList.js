//Linked List is a linear data structure which is a collection of nodes
// Each node has data and address to the next node
// Linked list is a Dynamic Datastructure which can grow and shrink during the run time
// No Wastage of Memory
// Insertion or Deletion is Easy. No shifting is required like array
// Linked List has Head and Tail
    // Head refers the start of the array
    // Tail refers the end of the array

// Constructor is Important in Class to instanciate it as an object

class Node{
    constructor(element){
        this.element = element;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // Insert at the Head
    InsertionAtHead(element){
        // Create a new Node
        const newNode = new Node(element);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            const currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode;
        }
        return newNode;

    }

    // Insert at Tail
    InsertionAtTail(element){
        // Create a New Node
        const newNode = new Node(element);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return newNode;
    }

    //Insert in the Middle
    InsertionAtMiddle(element, pos){
        
        if(position === 1){
            this.InsertionAtHead(element)
            return;
        }
        let temp=this.head, count = 1;
        while(count < pos -1){
            temp = temp.next;
            count ++
        }
        
        // Insert at Last
        if(temp.next === null){
            this.InsertionAtTail(element)
        }
        
        const newNode = new Node(element);
        newNode.next = temp.next;  
        temp.next = newNode;

        return newNode
    }
}

const LinkedList = new SinglyLinkedList();

// LinkedList.InsertionAtHead(30)
LinkedList.InsertionAtHead(20)
LinkedList.InsertionAtHead(10)

LinkedList.InsertionAtTail(40)
LinkedList.InsertionAtTail(50)
LinkedList.InsertionAtTail(60)


LinkedList.InsertionAtMiddle(30, 3)
LinkedList.InsertionAtMiddle(70, 1)

console.log(LinkedList.head);