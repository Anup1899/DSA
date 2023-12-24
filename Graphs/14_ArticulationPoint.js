// Time Complexity --- O(V+E)

// Articulation Point is the vertex in the graph if we remove that vertex from the graph it gets disconnected

// Tarjan's Algorithm is used to find Articulation Point --- Based on DFS
// Discovery Array and Lowest Discovery Time Array is used
    // Lowest Discovery Time --- For all possible reachable node from current node

// There are only two cases to find the articulation point
// Case I
    // When Node is the corner node --- Start of DFS and Disconnected Children > 1
        // Parent = -1 and disconnected children > 1
        // Disconnected Children mean there is no other way the child node are connected to each other than parent node 
        // Disconnected Node means No Direct and Indrect Connection
// Case II
    // Node is not the starting point of DFS
    // u -----> v
    // SubCase I --- There is only one way to travel from u to v
        // dis[u] < low[v]
    // SubCase II --- u is the root of the cycle formed between u and v ---> u is the articulation point
        // u ------- a ------- v
        //  \                 /
        //   \               /
        //    |----- b-------|
        
        // dis[u] = low[v]

    // Combining above two sub cases  dis[u] <= low[v]


// Condition for neibhour
 // Neibhour is Parent
 // Neibhour is Visited --> It is not children. It is ancestor
 // Neibhour is Not Visited --> It is children.


// Dry Run
// DFS(current, visitedArray, Discovery, Lowest, articualtioArr, time, parent, children)
// visitedArray[current] = True
// DA[current] = LA[current] = ++time
// EdgeList e for Loop
// Neighbour is Parent ---> Continue
// Neighbour is visited ---> Check condition low[current] = Min(low[current], dis[neighnour])
// Neighbour is not visited 
    // dfs(neighbour, visitedArray, Discovery, Lowest, articulationArr, time, current,children)
    // ++children
    // low[current] = Min(low[current], low[current])
    // if(dis[current] < low[neighbour] && articualtioArr[current] === false && parent !== -1){
        // articualtioArr[current] = true 
        // }
        // if(parent == -1 && childern > 1 && articualtioArr[current] === false){
            // articualtioArr[current] = true 
        // }
        
class Vertex{
    constructor(src, desti){
        this.source = src;
        this.destination = desti
    }
}

class Articulation{
    constructor(totalVertex){
        this.graph = new Array(totalVertex).fill().map(item=> new Array())
    }

    create(index, node){
        this.graph[index].push(node)
    }

    atriculationPoint(current, visitedArray, discoveryArray, lowestArray, articualtioArr, time=0, parent = -1){
        visitedArray[current] = true;
        discoveryArray[current] = lowestArray[current] = ++time;

        let children=0;

        const edgeList = this.graph[current]
        for(let i =0; i< edgeList.length; i++){
            const vertex = edgeList[i];
            const source = vertex.source;
            const destina = vertex.destination;

            if(visitedArray[destina]){
                lowestArray[source] = Math.min(lowestArray[source], discoveryArray[destina])
            }
            
            if(visitedArray[destina] === false){
                this.atriculationPoint(destina, visitedArray, discoveryArray, lowestArray,articualtioArr, time, source)
                lowestArray[source] = Math.min(lowestArray[source], lowestArray[destina])
                ++children
                
                // Check Condition for Articulation Point
                // Node ---> parent !== -1
                if(parent !== -1 && discoveryArray[current] <= lowestArray[destina] && articualtioArr[source] === false){
                    articualtioArr[source] = true
                }   
                
            }
        }

        // Node ----> parent === -1
        if(parent === -1 && children > 1 && articualtioArr[current] === false){
            articualtioArr[current] = true
        }
    }
}


const totalVertex = 5 
const atriculationAlog = new Articulation(totalVertex)

atriculationAlog.create(0, new Vertex(0,1))
atriculationAlog.create(0, new Vertex(0,2))
atriculationAlog.create(0, new Vertex(0,3))

atriculationAlog.create(1, new Vertex(1,0))
atriculationAlog.create(1, new Vertex(1,2))

atriculationAlog.create(2, new Vertex(2,1))
atriculationAlog.create(2, new Vertex(2,0))

atriculationAlog.create(3, new Vertex(3,0))
atriculationAlog.create(3, new Vertex(3,4))

atriculationAlog.create(4, new Vertex(4,3))

const discoveryArray= new Array(totalVertex)
const lowestArray = new Array(totalVertex)
const visitedArray= new Array(totalVertex).fill(false)
const articualtioArr= new Array(totalVertex).fill(false)

for(let i=0; i< visitedArray.length; i++){
    if(visitedArray[i] === false){
        atriculationAlog.atriculationPoint(i, visitedArray, discoveryArray, lowestArray, articualtioArr)
    }
}

for(let i=0; i< articualtioArr.length; i++){
    if(articualtioArr[i]){
        console.log("Articulatio Point :-- ", i);
    }
}

