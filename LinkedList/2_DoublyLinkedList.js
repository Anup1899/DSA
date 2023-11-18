class Node{
    constructor(element){
        this.prev = null
        this.next = null
        this.element = element;
    }
}

class DoublyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    //Insert At Head
    InsertAtHead(element){

        const newNode = new Node(element);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode; 
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        return;

    }

    //Insert At Tail
    InsertAtTail(element){
        const newNode = new Node(element)

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return
    }

    //Insert At Middle
    InsertAtMiddle(element, pos){

        if(pos == 1){
            this.InsertAtHead(element);
            return;
        }

        const newNode = new Node(element);

        let temp = this.head, count= 1

        while(count < pos -1){
            temp = temp.next 
            ++count   
        }

        if(temp.next === null){
            this.InsertAtTail(element)
            return;
        }

        // console.log(temp);
        newNode.prev = temp;
        newNode.next = temp.next;
        temp.next.prev = newNode;
        temp.next = newNode;
        return
    }

    // Delete Node
    DeleteNode(pos){
        try{
            if(pos == 1){
                this.head = this.head.next;
                this.head.prev = null;
                return;
            }
    
            let count = 1,temp = this.head;
    
            while(count < pos -1){
                temp = temp.next;
                ++count
            }
    
            //Last Node
            if(temp.next.next == null){
                temp.next = null;
                this.tail = temp;
                return;
            }
    
            temp.next.next.prev = temp;
            temp.next = temp.next.next;
    
            return;

        }
        catch(err){
            console.error("Trying to delete node which does not exist");
        }
       
    }

}


const LinkedList = new DoublyLinkedList();

LinkedList.InsertAtHead(20)
LinkedList.InsertAtHead(10)
LinkedList.InsertAtTail(30)
LinkedList.InsertAtTail(40)

LinkedList.InsertAtMiddle(100, 3)
LinkedList.InsertAtMiddle("A", 6)


console.log(LinkedList.head);
console.log(LinkedList.head.next);
console.log(LinkedList.head.next.next);
console.log(LinkedList.head.next.next.next);
console.log(LinkedList.head.next.next.next.next);
console.log(LinkedList.head.next.next.next.next.next);

LinkedList.DeleteNode(7)
console.log("Delete Node");
console.log(LinkedList.head);
console.log(LinkedList.head.next);
console.log(LinkedList.head.next.next);
console.log(LinkedList.head.next.next.next);
console.log(LinkedList.head.next.next.next.next);
console.log(LinkedList.head.next.next.next.next.next);
