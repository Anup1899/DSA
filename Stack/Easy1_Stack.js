//Stack Work on the principle of Last In First Out (LIFO)
    // Functions to be implemented
    // push(item)  --- Time Complexity is constant time  O(1) 
    // pop()  --- Time Complexity is constant time O(1)
    // peek() --- Time Complexity is constant time O(1)
    // isEmpty()
    // printStack()

class Stack{

    constructor(){
        this.stackArr = [];
    }

    //Remove the last element
    pop(){
        return this.isEmpty()? "Stack is Empty" :this.stackArr.pop()
    }   

    push(ele){
        return this.stackArr.push(ele)
    }

    peek(ele){
        return this.isEmpty()? "Stack is Empty": this.stackArr[this.stackArr.length -1]
    }

    top(){
        const len = this.stackArr.length;
        return len === 0? "Stack is Empty" :this.stackArr[len -1]
    }

    isEmpty(){
        return this.stackArr.length === 0
    }

    printStack(){
        console.log(this.stackArr);
    }
}

class Stack{
    constructor(){
        this.top = -1;
        this.size = 0;
        this.arr = [];
    }
}

const stackInstance = new Stack();

stackInstance.push(10)
stackInstance.push(20)
stackInstance.push(30)
stackInstance.push(40)

stackInstance.printStack();
console.log(
    stackInstance.top(),
    stackInstance.isEmpty(),
    stackInstance.peek(20)
);

console.log(
    stackInstance.pop(),
    stackInstance.pop(),
    stackInstance.pop(),
    stackInstance.pop(),
    stackInstance.pop(),
);






