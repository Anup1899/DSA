//Heap is Complete Binary Tree that comes with a Heap Order Property
//Complete Binary Tree 
    // Every level is completely filled expect the last level
    // Nodes are always lean towards the left

// Heap Order Property
    // Max Heap -- Root Node is always greater than the child node 
    // Min Heap -- Root Node is always smaller than the child node

// Property in Binary Heap (1 Index approach) 
    // Node Index = i
    // Left Child Index = 2*i
    // Right Child Index = 2*i + 1
    // Parent Index = i/2

// Property in Binary Heap (0 Index approach) 
    // Node Index = i
    // Left Child Index = 2*i + 1
    // Right Child Index = 2*i + 2
    // Parent Index = i+1/2    

// Insertion
    // We will add the element at the last item in an array
    // Then we will compare it parent (i/2)
    // (Max Heap) If element 
    // Time Complexity in Binary Heap is O(H) or O(logN)


class Heap{

    constructor(){
        this.binaryHeap = [-1];
    }
    
    insert(ele){
        this.binaryHeap.push(ele)

        let index = this.binaryHeap.length -1;
        
        while(index > 1){
            let parentIndex = Math.floor(index /2)
            if(this.binaryHeap[parentIndex]  < this.binaryHeap[index]){
                const temp = this.binaryHeap[parentIndex];
                this.binaryHeap[parentIndex] = this.binaryHeap[index];
                this.binaryHeap[index] = temp;

                index = parentIndex;
            }else{
                return
            }
        }
    }

    printHeap(){
        console.log(this.binaryHeap);
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

     