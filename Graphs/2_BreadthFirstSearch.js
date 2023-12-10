// Time Complexity is O(V+E)  Vertices + Edges


class Vertex{
    constructor(src, dest){
        this.source = src;
        this.destination = dest;
    }
}

class BFS{
    constructor(totalVetices){
        this.adjacencyArr = new Array(totalVetices).fill().map(item=>{
            item = [];
            return item;
        })
    }

    createGraph(index, vertexInfo){
        this.adjacencyArr[index].push(vertexInfo)
    }

    bfsForGraph(){
        const visitedArray = new Array(this.adjacencyArr.length).fill(false);

        const queue = []
        queue[0] = 0;

        let str = ""


        while(queue.length){
            const queueEle = queue.shift();


            if(visitedArray[queueEle] === false){
                visitedArray[queueEle] = true;
                // console.log(queueEle);
                str += queueEle + ", "
                const edgeList = this.adjacencyArr[queueEle];

                for(let i=0; i< edgeList.length; i++){
                    queue.push(edgeList[i].destination)
                }
            }
        }

        console.log(str);
    }
}

const bfsGraph = new BFS(7)

bfsGraph.createGraph(0, new Vertex(0,1))
bfsGraph.createGraph(0, new Vertex(0,2))

bfsGraph.createGraph(1, new Vertex(1,0))
bfsGraph.createGraph(1, new Vertex(1,3))

bfsGraph.createGraph(2, new Vertex(2,0))
bfsGraph.createGraph(2, new Vertex(2,4))

bfsGraph.createGraph(3, new Vertex(3,1))
bfsGraph.createGraph(3, new Vertex(3,4))
bfsGraph.createGraph(3, new Vertex(3,5))

bfsGraph.createGraph(4, new Vertex(4,3))
bfsGraph.createGraph(4, new Vertex(4,2))
bfsGraph.createGraph(4, new Vertex(4,5))

bfsGraph.createGraph(5, new Vertex(5,3))
bfsGraph.createGraph(5, new Vertex(5,4))
bfsGraph.createGraph(5, new Vertex(5,6))

bfsGraph.createGraph(6, new Vertex(6,5))


bfsGraph.bfsForGraph();