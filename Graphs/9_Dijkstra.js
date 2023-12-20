// Shortest Distance Algorithm
// Applied for weighted graph --> If we need to find the shortest distance we need to have the distance
// Dijkstra's Alogorithm is used to find the shortest distance from the source to all the vertices

//Shortest distance algorithm is based on the concept of RELAXATION
// Relaxation ---> It is the logic to find to the shortest distance to destination and update it

// Dijkstra's Algorithm is based on BFS also called as Greedy algorithm because it is greedy to find the shortest path
// Queue is used in BFS but in Dijkstra's Algorithm we use PRIORITY Queue

class Vertex {
  constructor(src, dest, wegt) {
    this.source = src;
    this.destination = dest;
    this.weight = wegt;
  }
}

class Pair {
  constructor(node, dis) {
    this.node = node;
    this.distance = dis;
  }
}

class Dijkstra {
  constructor(totalVetices) {
    this.graph = new Array(totalVetices).fill().map((item) => new Array());
  }

  create(index, node) {
    this.graph[index].push(node);
  }

  dijkstraAlgo(sourceNode) {
    const verticesCount = this.graph.length;
    const priorityQueue = [];
    priorityQueue.push(new Pair(sourceNode, 0));

    const distanceArray = new Array(verticesCount).fill(
      Number.POSITIVE_INFINITY
    );
    distanceArray[sourceNode] = 0;

    const visitedArray = new Array(verticesCount).fill(false);

    //Shift the PQ
    //if visited ---> F
    // Visited True
    // Loop Over Nebiours
    // d[paentNode] + neboiur.weigth < d[nebiour.des]  -->
    // d[nebiour.des] = d[paentNode] + neboiur.weigth
    // priotyQues.push(Neboius.dest)
    // Sort pQ based on the minimum distance
    while (priorityQueue.length) {
      const pairNode = priorityQueue.shift();
      console.log("Current Node :-- node ->", pairNode.node, " distance :--", pairNode.distance);

      if (visitedArray[pairNode.node] === false) {
        visitedArray[pairNode.node] = true;

        const edgeList = this.graph[pairNode.node];
        for (let i = 0; i < edgeList.length; i++) {
          const vertex = edgeList[i];

          const src = vertex.source;
          const desti = vertex.destination;
          const weit = vertex.weight;

          if (distanceArray[src] + weit < distanceArray[desti]) {
            distanceArray[desti] = distanceArray[src] + weit;
            priorityQueue.push(new Pair(desti, distanceArray[desti] ));
            
            //Sorted on the basis of Minimum Distance
            priorityQueue.sort((a,b)=> a.distance - b.distance)
            
            console.log(priorityQueue);
          }
        }
      }
    }

    console.log(distanceArray);
    return;
  }
}

const totalVetices = 6;
const shortesAlgo = new Dijkstra(6);

shortesAlgo.create(0, new Vertex(0, 1, 2));
shortesAlgo.create(0, new Vertex(0, 2, 4));

shortesAlgo.create(1, new Vertex(1, 2, 1));
shortesAlgo.create(1, new Vertex(1, 3, 7));

shortesAlgo.create(2, new Vertex(2, 4, 3));

shortesAlgo.create(3, new Vertex(3, 5, 1));

shortesAlgo.create(4, new Vertex(4, 3, 2));
shortesAlgo.create(4, new Vertex(4, 5, 5));

shortesAlgo.dijkstraAlgo(0);
