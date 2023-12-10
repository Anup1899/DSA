// Graph is a network of nodes
// Node in graph is known as Vertex
// Connection between two nodes is called Edge

//Application of Graph
    // Maps
    // Social Network
    // Delivery Network

// Algorithm
    // Shortest Path -- Maps
    // Followers on Social Media -- Social Network
    // Shortest cyclic path


// Basic of Graph    
    // Uni-directional  ---> Directed Graph
    // Bi-directional / Un-directional  ---> Undirected Graph

    // Weighted Graph
    // Unweighted Graph


    // Undirected Weighted Graph
    // Directed Unweighted Graph

// Storing Graphs
    // Adjacency List -- List of List (Most Commonly Used)
    // Adjaceny Matrix -- Unnecessary Memory is used --- Each Node will store values for all the vertices 
    // Implicit Matrix -- 
    // Edge List -- Specifically used when we need to sort Edge List {Sorting will be done on the basis of different parameters}

// Adjacency List
    // Store the neighbours of the Vertex
    // Graph will be an array of Array
    // Each Index will be an array will have the data of Edges

    // Length of Parent Array will be equal to the number of vertices



class Edge{
    constructor(src, dest, wtg){
        this.source = src;
        this.destination = dest
        this.weight = wtg;
    }
}

class Adjacency_Graph{
    constructor(numberOfVetices){
        this.adjacencyList = new Array(numberOfVetices).fill().map(item=> new Array());
    }

    createGraph(index, node){
        this.adjacencyList[index].push(node)
    }
}

const graph = new Adjacency_Graph(4);
graph.createGraph(0, new Edge(0,2,2))

graph.createGraph(1, new Edge(1,2.,0))
graph.createGraph(1, new Edge(1,3,0))

graph.createGraph(2, new Edge(2,0,2))
graph.createGraph(2, new Edge(2,3,-1))
graph.createGraph(2, new Edge(2,1,10))

graph.createGraph(3, new Edge(3,1,0))
graph.createGraph(3, new Edge(3,2,-1))


graph.adjacencyList.forEach((list)=>{
    list.forEach(node=>{
        console.log("Source :-",node.source, " Destination:--", node.destination, " Weigth:--", node.weight );
    })
})



