// Time Complexity = O(v+ E)

class Vertex{
    constructor(src, dest){
        this.source = src;
        this.destination = dest;
    }
}


class DFS{
    constructor(totalVetices){
        this.adjacencyArr = new Array(totalVetices).fill().map(item=>{
            item = [];
            return item;
        })
    }

    createGraph(index, vertexInfo){
        this.adjacencyArr[index].push(vertexInfo)
    }

    dfsForGraph(current, visitedArray= new Array(this.adjacencyArr.length).fill(false)){

        console.log(current);
        visitedArray[current] = true;

        const edgeList = this.adjacencyArr[current]
        for(let i=0; i< edgeList.length; i++){
            if(visitedArray[edgeList[i].destination] === false){
                this.dfsForGraph(edgeList[i].destination, visitedArray )
            }
        }


    }
    
}

const dfsGraph = new DFS(7)

dfsGraph.createGraph(0, new Vertex(0,1))
dfsGraph.createGraph(0, new Vertex(0,2))

dfsGraph.createGraph(1, new Vertex(1,0))
dfsGraph.createGraph(1, new Vertex(1,3))

dfsGraph.createGraph(2, new Vertex(2,0))
dfsGraph.createGraph(2, new Vertex(2,4))

dfsGraph.createGraph(3, new Vertex(3,1))
dfsGraph.createGraph(3, new Vertex(3,4))
dfsGraph.createGraph(3, new Vertex(3,5))

dfsGraph.createGraph(4, new Vertex(4,3))
dfsGraph.createGraph(4, new Vertex(4,2))
dfsGraph.createGraph(4, new Vertex(4,5))

dfsGraph.createGraph(5, new Vertex(5,3))
dfsGraph.createGraph(5, new Vertex(5,4))
dfsGraph.createGraph(5, new Vertex(5,6))

dfsGraph.createGraph(6, new Vertex(6,5))

// dfsGraph.dfsForGraph(0)

//For Non Connected Graphs

const visitedArray = new Array(7).fill(false)
for(let i=0; i< visitedArray.length; i++){
    if(visitedArray[i] === false){
        dfsGraph.dfsForGraph(i, visitedArray)
    }
}