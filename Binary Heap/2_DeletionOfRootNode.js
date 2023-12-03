//Deletion of Node
//Whenever talking about the deletion of node in Binary Heap we talk about deleting the root node
// We Replace the Root Node with last element and then is it moved to it correct position


class Heap{
    constructor(){
        this.binaryHeap= [-1]
    }

    insert(ele){
        this.binaryHeap.push(ele)
        
        let index = this.binaryHeap.length - 1

        while(index > 1){
            const parentIndex = Math.floor(index/2);
            
            if(this.binaryHeap[parentIndex] < this.binaryHeap[index]){
                const temp = this.binaryHeap[parentIndex];
                this.binaryHeap[parentIndex] = this.binaryHeap[index]
                this.binaryHeap[index] = temp;

                index = parentIndex;
            }else{
                return;
            }
        }
    }

    printHeap(){
        console.log(this.binaryHeap);
    }

    deleteNode(){
        if(this.binaryHeap.length === 0){
            return
        }
        const lastIndex = this.binaryHeap.length - 1

        this.binaryHeap[1] = this.binaryHeap[lastIndex];
        this.binaryHeap.pop();

        let index  = 1;

        while(index <=  this.binaryHeap.length - 1){
            const leftChildIndex = 2 * index
            const rightChildIndex = 2 * index + 1

            if(this.binaryHeap[index] <  this.binaryHeap[leftChildIndex] && leftChildIndex <=  this.binaryHeap.length - 1){
                const temp = this.binaryHeap[index]
                this.binaryHeap[index] = this.binaryHeap[leftChildIndex]
                this.binaryHeap[leftChildIndex] = temp

                index = leftChildIndex
            }
            else if(this.binaryHeap[index] <  this.binaryHeap[rightChildIndex] && rightChildIndex <=  this.binaryHeap.length - 1){
                const temp = this.binaryHeap[index]
                this.binaryHeap[index] = this.binaryHeap[rightChildIndex]
                this.binaryHeap[rightChildIndex] = temp
                
                index = rightChildIndex
            }
            else {
                return
            }
        }

    }
}


const binarHeap = new Heap()
binarHeap.insert(55)
binarHeap.insert(52)
binarHeap.insert(50)
binarHeap.insert(56)
binarHeap.insert(58)
binarHeap.insert(68)


binarHeap.printHeap()

binarHeap.deleteNode()

binarHeap.printHeap()

