class Vertex{
    constructor(src, desti){
        this.source = src;
        this.destination = desti;
    }
}

class TopologicalSorting{
    constructor(numberOfVertex){
        this.adjacenyArr = new Array(numberOfVertex).fill().map(item=>{
            item = [];
            return item
        })
    }

    create(index, node){
        this.adjacenyArr[index].push(node)
    }

    toplogicalSorting(current, visitedArray, stack){
        visitedArray [current] = true;

        const edgeList = this.adjacenyArr[current]

        for(let i=0; i< edgeList.length; i++){
            const node = edgeList[i]
            if(visitedArray[node.destination] === false){
                this.toplogicalSorting(node.destination, visitedArray, stack)
            }
        }
        if(!stack.includes(current)){
            stack.push(current)
        }
        // return
    }
}

const vertices = 6
const topologicalSorting = new TopologicalSorting(vertices)


topologicalSorting.create(5, new Vertex(5,0))
topologicalSorting.create(5, new Vertex(5,2))

topologicalSorting.create(4, new Vertex(4,0))
topologicalSorting.create(4, new Vertex(4,1))

topologicalSorting.create(2, new Vertex(2,3))

topologicalSorting.create(3, new Vertex(3,1))

const visitedArray = new Array(vertices).fill(false)

let stackOrder = []
for(let i=0; i< visitedArray.length; i++){
      topologicalSorting.toplogicalSorting(i, visitedArray, stackOrder);
}
console.log(stackOrder);
console.log(stackOrder.reverse());