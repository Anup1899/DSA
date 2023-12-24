// Bridge is an edge whose deletion will increase the graph's number of connected components
// Bridge used in Undirected Unweighted Graph
// Tarjan Algorithm 
    // Finding the bridge in Graph
    // Finding the Atriculation Point in Graph
    // For Topological Sorting

// Trajan Algorithm is based of Depth First Search Alogorithm

// Discovery Time Array  --- Number of Steps needed to reach the vertex form the source
// Lowest Time Array ---Lowest Discovery Time of the array

// Important Step to find the bridge 
    // u -------> v
    // discov[ u ]  < lowest[ v ]
    // Bridge is only formed when the is only one way to reach v i.e., via u
    // Node after v will have discovery time greater than u

 

// Dry Run
// DFS is used 
// visitedArray = new Array(V).fill(false) DT= new Array(V), LT = new Array(V), time = 0, parent = -1
// DFS(current, visitedArray, DT, LT, parent)
// va[current] = true
// DT[current] = LT[current] = ++time
// Ede = e
// for loop  --> edgeList
// if(va[current])
    // low[current] = min(low[current], dt[e.deis])
// if(va[current] === false)
    // DFS(e.dist, visitedArray, DT, LT, currnet)
    // low[current] min(low[current], low[desti])
    // if(DT[current] < low[e.dest])                    -----> IMPORTANT (For Bridge)
        // Bridge Exist


class Vertex{
    constructor(src, desti){
        this.source = src
        this.destination = desti
    }
}


class Bridge{
    constructor(totalVertex){
        this.graph = new Array(totalVertex).fill().map(item=> new Array())
    }

    create(index, node){
        this.graph[index].push(node)
    }

    findBridge(current, visitedArray, discoveryArray, lowestArray, time = 0, parent = -1){

        visitedArray[current] = true
        discoveryArray[current] = lowestArray[current] = ++time;

        const edgeList = this.graph[current] 
        for(let i=0; i< edgeList.length; i++){
            const vertex = edgeList[i];
            if(visitedArray[vertex.destination] === false && vertex.destination !== parent){
                this.findBridge(vertex.destination, visitedArray, discoveryArray, lowestArray, time, vertex.source)

                lowestArray[vertex.source] = Math.min(lowestArray[vertex.source], lowestArray[vertex.destination])

                // console.log(vertex.source, vertex.destination);
                if(discoveryArray[vertex.source] < lowestArray[vertex.destination]){
                    console.log("Bride Exist from :-- ", vertex.source +  "---->" + vertex.destination);
                }
                
            }

            if(visitedArray[vertex.destination] && vertex.destination !== parent){
                lowestArray[vertex.source] = Math.min(lowestArray[vertex.source], discoveryArray[vertex.destination]  )
            }
        }
    }

}


const totalVertex = 6 
const bridgeAlgo = new Bridge(totalVertex)

bridgeAlgo.create(0, new Vertex(0,1))
bridgeAlgo.create(0, new Vertex(0,2))
bridgeAlgo.create(0, new Vertex(0,3))

bridgeAlgo.create(1, new Vertex(1,0))
bridgeAlgo.create(1, new Vertex(1,2))

bridgeAlgo.create(2, new Vertex(2,1))
bridgeAlgo.create(2, new Vertex(2,0))

bridgeAlgo.create(3, new Vertex(3,0))
bridgeAlgo.create(3, new Vertex(3,4))
bridgeAlgo.create(3, new Vertex(3,5))

bridgeAlgo.create(4, new Vertex(4,3))
bridgeAlgo.create(4, new Vertex(4,5))

bridgeAlgo.create(5, new Vertex(5,3))
bridgeAlgo.create(5, new Vertex(5,4))


const discoveryArray= new Array(totalVertex)
const lowestArray = new Array(totalVertex)
const visitedArray= new Array(totalVertex).fill(false)

bridgeAlgo.findBridge(0, visitedArray, discoveryArray, lowestArray)