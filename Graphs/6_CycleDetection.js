class Vertex{
    constructor(src, desti){
        this.source = src;
        this.destination = desti;
    }
}

class CycleDetection{
    constructor(numberOfVertex){
        this.adjacenyArr = new Array(numberOfVertex).fill().map(item=>{
            item = [];
            return item
        })
    }

    create(index, node){
        this.adjacenyArr[index].push(node)
    }

    detectCycle(current = 0, visitedArray = new Array(this.adjacenyArr.length).fill(false), recurssionArr  = new Array(this.adjacenyArr.length).fill(false)){

    visitedArray[current] = true;
    recurssionArr[current] = true;

    const edgeList = this.adjacenyArr[current]
    for(let i=0; i< edgeList.length; i++){
        const node = edgeList[i].destination 
        if(recurssionArr[node] === true){
            return true;
        }
        else if(visitedArray[node] === false){
           if(this.detectCycle(node, visitedArray, recurssionArr)){
            return true
           }
        }
    }

    recurssionArr[current] = false;
    return false;
    }   

}

const vertices = 4
const cycleDetection = new CycleDetection(vertices)

cycleDetection.create(0, new Vertex(0,2))

cycleDetection.create(1, new Vertex(1,0))

cycleDetection.create(2, new Vertex(2,3))

cycleDetection.create(3, new Vertex(3,0))

console.log(
    cycleDetection.detectCycle()
);


//For Graph to Visit Each and Every Node
const visitedArray = new Array(vertices).fill(false)
const recurssionArray = new Array(vertices).fill(false)

for(let i=0; i< visitedArray.length; i++){
    if(visitedArray[i] === false){
        const cycleDetected =  cycleDetection.detectCycle(i, visitedArray, recurssionArray)
        if(cycleDetected){
            console.log(true);
            break
        }
    }

}