class Vertex{
    constructor(src, dest){
        this.source = src;
        this.destination = dest;
    }
}


class AllPath_FromSourceToTarget{
    constructor(totalVetices){
        this.adjacencyArr = new Array(totalVetices).fill().map(item=>{
            item = [];
            return item;
        })
    }

    createGraph(index, vertexInfo){
        this.adjacencyArr[index].push(vertexInfo)
    }

    allPathFromSourceToTarget(source, target, path ="", visitedArray= new Array(this.adjacencyArr.length).fill(false)){
        path += source;
        
        if(source === target){
            console.log(path);
            return;
        }

        
        const edgeList = this.adjacencyArr[source];

        for(let i=0; i< edgeList.length; i++){

            if(visitedArray[source] === false){
                visitedArray[source] = true;
                this.allPathFromSourceToTarget(edgeList[i].destination, target, path, visitedArray )
                visitedArray[source] = false;
            }
        }
    }
    
}

const allPaths = new AllPath_FromSourceToTarget(7)

allPaths.createGraph(0, new Vertex(0,1))
allPaths.createGraph(0, new Vertex(0,2))

allPaths.createGraph(1, new Vertex(1,0))
allPaths.createGraph(1, new Vertex(1,3))

allPaths.createGraph(2, new Vertex(2,0))
allPaths.createGraph(2, new Vertex(2,4))

allPaths.createGraph(3, new Vertex(3,1))
allPaths.createGraph(3, new Vertex(3,4))
allPaths.createGraph(3, new Vertex(3,5))

allPaths.createGraph(4, new Vertex(4,3))
allPaths.createGraph(4, new Vertex(4,2))
allPaths.createGraph(4, new Vertex(4,5))

allPaths.createGraph(5, new Vertex(5,3))
allPaths.createGraph(5, new Vertex(5,4))
allPaths.createGraph(5, new Vertex(5,6))

allPaths.createGraph(6, new Vertex(6,5))


allPaths.allPathFromSourceToTarget(0,5)