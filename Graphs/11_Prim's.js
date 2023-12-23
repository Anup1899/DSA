// Minimum Spanning Tree ---> It is a subset of edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycle and with the minimum possible total edge weight 

// Minimum Spanning Tree is for undirected and weighted graph


class Vertex{
    constructor(src, deti, weit){
        this.source = src;
        this.destination = deti;
        this.weight = weit;
    }
}

class Node {
    constructor(des, distance){
        this.destination = des;
        this.distance = distance
    }
}

class Prim{
    constructor(totalVertex){
        this.graph = new Array(totalVertex).fill().map(item=> new Array())
    }

    create(index, vertex){
        this.graph[index].push(vertex)
    }


    // Priority Queue // Create a Visited Array fill false and length = totalNumberOfVertex // TotalWeight
    // Pop form Queue -->
        // while(queue.lenght)
        // pop from quue
        // if(visiited [elel] === flase)
        // true --> visited[ele] = true
            // totalWet += ele.weight
            // for() ---> Edge List
                //queue.push(edges)
    primeAlgo(src){
        const priorityQueue = new Array()
        priorityQueue.push( new Vertex(src, src,0))

        const visitedArrray = new Array(this.graph.length).fill(false);

        let totalMinimumEdgeWeight = 0;
        let newMinimumSpanningTree= new Array(this.graph.length).fill().map(item=> new Array())

        while(priorityQueue.length){

            const node = priorityQueue.shift();

            // console.log(priorityQueue);

            if(visitedArrray[node.destination] === false){
                visitedArrray[node.destination] = true
                totalMinimumEdgeWeight += node.weight;
                if(node.source !== node.destination){
                    newMinimumSpanningTree[node.source].push(new Vertex(node.source, node.destination, node.weight))
                }

                const edgeList = this.graph[node.destination]

                for(let i=0; i<edgeList.length; i++){
                    const vertex = edgeList[i]
                    priorityQueue.push(new Vertex(vertex.source, vertex.destination, vertex.weight))

                    //Sort the priority Queue
                    priorityQueue.sort((a, b)=> a.weight - b.weight)
                }
            }   
            
        }

        console.log(totalMinimumEdgeWeight);
        console.log(newMinimumSpanningTree);
    }   
}


const primeGraph = new Prim(4)

primeGraph.create(0, new Vertex(0, 1, 10))
primeGraph.create(0, new Vertex(0, 2, 15))
primeGraph.create(0, new Vertex(0, 3, 30))

primeGraph.create(1, new Vertex(1, 0, 10))
primeGraph.create(1, new Vertex(1, 3, 40))

primeGraph.create(2, new Vertex(2, 0, 15))
primeGraph.create(2, new Vertex(2, 3, 50))

primeGraph.create(3, new Vertex(3, 0, 30))
primeGraph.create(3, new Vertex(3, 1, 40))
primeGraph.create(3, new Vertex(3, 2, 50))

primeGraph.primeAlgo(3)