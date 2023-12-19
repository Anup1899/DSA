class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority
    }
}
class PriorityQueue{

    constructor(){
        this.priorityQueue = new Array();
    }

    isEmpty(){
        return this.priorityQueue.length === 0
    }

    enqueue(nodeEle){
        if(this.priorityQueue.length === 0){
            this.priorityQueue.push(nodeEle)
            return
        }
        
        // Find the sopt where Node Priority > ArrayEle  Priority
        // Slice the priority Queue from the ArrayEleme
        // Push the node
        // Merge the sliced array at the back

        let desired_idx =-1; 
        for(let i=0; i < this.priorityQueue.length; i++){
            if(nodeEle.priority > this.priorityQueue[i].priority){
                desired_idx = i;
                break;
            }
        }

        if(desired_idx === -1){
            this.priorityQueue.push(nodeEle)
            return
        }   

        else{
            const sliceArray = this.priorityQueue.slice(0, desired_idx);
            const remainedArray = this.priorityQueue.slice(desired_idx);

            sliceArray.push(nodeEle)

            this.priorityQueue = [...sliceArray, ...remainedArray]
            return;
        }

    }

    deqeue(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        else{
            return this.priorityQueue.shift()
        }
    }

    front(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        else{
            return this.priorityQueue[0].value
        } 
    }

    queueLength(){
        return this.priorityQueue.length
    }
}

const pQueue = new PriorityQueue()

pQueue.enqueue(new Node(1, 10))
pQueue.enqueue(new Node(2, 30))
pQueue.enqueue(new Node(3, 20))
pQueue.enqueue(new Node(4, 40))
pQueue.enqueue(new Node(4, 25))

console.log(pQueue.deqeue());

console.log(pQueue.front());


console.log(pQueue.priorityQueue);