class Node{
    constructor(ele){
        this.element = ele
        this.prev = null
        this.next = null
    }
}

class CircularDoublyLinkedList{
    constructor(){
        this.tail = null
    }

    InsertAtTail(ele, pos=null){

        const newNode = new Node(ele);

        if(this.tail === null){
            newNode.prev = newNode;
            newNode.next = newNode;
            this.tail = newNode;
        }

        newNode.next = this.tail.next;
        newNode.prev = this.tail;
        this.tail.next.prev = newNode;
        this.tail.next = newNode;

        if(pos != 1){
            this.tail = newNode;
        }

        return newNode;

    }

    InsertAtMiddle(ele, pos){
        if(pos === 1){
            this.InsertAtTail(ele, 1)
            return;
        }

        let count=1, temp = this.tail

        while(count < pos){
            temp = temp.next
            count++
        }

       if(temp.element === this.tail.element){
        this.InsertAtTail(ele)
        return;
       }
       const newNode = new Node(ele)
       newNode.next = temp.next;
       newNode.prev = temp.next.prev;
       temp.next.prev = newNode;
       temp.next = newNode

       return
        
    }

    DeleteNode(pos){

        let temp = this.tail, count = 1

        while(count < pos){
            count++
            temp = temp.next
        }
        
        if(temp.next.element === this.tail.element){
            this.tail = temp
        }
        temp.next.next.prev = temp;
        temp.next = temp.next.next


        return
    }
}



const LinkedList = new CircularDoublyLinkedList()
LinkedList.InsertAtTail(10)
LinkedList.InsertAtTail(20)
LinkedList.InsertAtTail(30)
LinkedList.InsertAtTail(40)

// LinkedList.InsertAtMiddle("A",1)
LinkedList.InsertAtMiddle("A",3)

LinkedList.DeleteNode(5)

console.log(LinkedList.tail);
