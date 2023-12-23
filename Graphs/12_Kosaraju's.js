// Strongly Connected Component
    // We can reach every vertex of the component from every other vertex in thart component

// Kosaraju's Algorithm
    // Get nodes in Stack -- By Topological Sorting
    // Transpose the Graph
    // Perform DFS according to stack node on the transpose graph

class Vertex{
    constructor(src, des){
        this.source = src;
        this.destination = des;
    }
}

class Kosaraju{
    constructor(totalVertices){
        this.graph = new Array(totalVertices).fill().map(item=> new Array())
        this.totalVertices = totalVertices;
        
        this.transposeGraph = new Array(totalVertices).fill().map(item=> new Array())
        
    }

    createGraph(index, node){
        this.graph[index].push(node)
    }

    topologicalSorting(src, visitedArray, stack){

        visitedArray[src] = true;
        
        const edgeList = this.graph[src]
        for(let i=0; i< edgeList.length; i++){
            const node = edgeList[i]
            if(visitedArray[node.destination]=== false){
                this.topologicalSorting(node.destination, visitedArray, stack)
            }
        }

        if(!stack.includes(src)){
            stack.push(src)
        }
    }

    dfs(src, visitedArray){
        visitedArray[src] = true;
        console.log(src);
        const edgeList = this.transposeGraph[src]
        for(let i=0; i< edgeList.length; i++){
            const vertex = edgeList[i]
                if(visitedArray[vertex.destination] === false){
                this.dfs(vertex.destination, visitedArray)
            }
        }
    }

    algo_kosaraju(){
        const visitedArray = new Array(this.totalVertices).fill(false)
        //Step 1:-- Get the node in the stack --- Toplogical Sorting
        const stackArray = new Array()
        for(let i=0; i< visitedArray.length; i++){
            if(visitedArray[i] === false){
                this.topologicalSorting(i, visitedArray, stackArray)
            }
        }
        
        //Step 2:-- Transpose the Graph
        for(let i=0; i< this.graph.length; i++){
            visitedArray[i]= false
            const edgeList = this.graph[i]
            for(let j=0; j< edgeList.length; j++){
                const node = edgeList[j]
                this.transposeGraph[node.destination].push(new Vertex(node.destination, node.source))
            }
        }

        //Step 3:-- DFS on Stack
        while(stackArray.length){
            const current = stackArray.pop();
            if(visitedArray[current] === false){
                this.dfs(current, visitedArray)
                console.log("New SSC");
            }
        }

    }
}


const kosarajuAlgo =  new Kosaraju(5)

kosarajuAlgo.createGraph(0, new Vertex(0, 2))
kosarajuAlgo.createGraph(0, new Vertex(0, 3))

kosarajuAlgo.createGraph(1, new Vertex(1, 0))

kosarajuAlgo.createGraph(2, new Vertex(2, 1))

kosarajuAlgo.createGraph(3, new Vertex(3, 4))


kosarajuAlgo.algo_kosaraju()
