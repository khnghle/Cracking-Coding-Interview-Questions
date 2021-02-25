//Given a directed graph and two nodes (S and E).
//Design an algorthm to find whether there is a route between S to E. 
const adjacencyList = {
  'A': ['B', 'F'], 
  'B': ['C'], 
  'C': ['E'],
  'D': ['B'], 
  'E': ['D', 'F'], 
  'F': []
}

//Check to see if there is a route between A and D
  // Input (start, end) 2 different nodes
  // Return boolean

//BFS : check the all children first then descendants
  //Queue 
function BFS(startNode, endNode) {
  let queue = [startNode]
  let seen = {}
  while (queue.length) {
    const currNode = queue.shift()
    if(!seen[currNode]) {
      seen[currNode] = true;
      if (currNode===endNode) return true
      queue = [...queue, ...adjacencyList[currNode]]
    }
  }
  return false;
}

//Bidirectional : start at node A and node D simulatenously 

BFS('A','D')