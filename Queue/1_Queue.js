class Queue{
    constructor(){
        this.arr = []
    }

    isEmpty(){
        return this.arr.length === 0
    }

    push(ele){
        return this.arr.push(ele);
    }

    shift(){
        return this.isEmpty() ? "Queue is Empty" : this.arr.shift();
    }

    peek(){
        return this.isEmpty ? "Queue is Empty" : this.arr[0];
    }

    printQueue(){
        return this.arr;
    }
}