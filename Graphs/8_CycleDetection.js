//Cycle Detection in Undirected Graph
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

    detectCycle(current, visitedArray = new Array(this.adjacenyArr.length).fill(false), parent=-1){
        visitedArray[current] = true;

        const edgeList = this.adjacenyArr[current]

        for(let i=0; i < edgeList.length; i++){
            const node = edgeList[i].destination
            if(visitedArray[node] === true && node !== parent){
                return true;
            }
            else if(visitedArray[node] === false){

                if(this.detectCycle(node, visitedArray, current)){
                    return true
                }
            }
        }

        return false

    }
}

const vertices = 6
const cyclicGraph = new CycleDetection(vertices)

cyclicGraph.create(0, new Vertex(0, 1))
cyclicGraph.create(0, new Vertex(0, 4))

cyclicGraph.create(1, new Vertex(1, 0))
cyclicGraph.create(1, new Vertex(1, 2))
// cyclicGraph.create(1, new Vertex(1, 4))

cyclicGraph.create(2, new Vertex(2, 1))
cyclicGraph.create(2, new Vertex(2, 3))

cyclicGraph.create(3, new Vertex(3, 2))

cyclicGraph.create(4, new Vertex(4, 0))
// cyclicGraph.create(4, new Vertex(4, 1))
cyclicGraph.create(4, new Vertex(4, 5))

cyclicGraph.create(5, new Vertex(5, 4))

const visitedArray = new Array(vertices).fill(false);

let isCycle;

for(let i=0; i< visitedArray.length;i++){
    isCycle = cyclicGraph.detectCycle(0)
    console.log(isCycle);
    if(isCycle){
        console.log(true);
        break;
    }
}
