const adjacencyList = {
	A: ["B", "F"],
	B: ["C"],
	C: ["E"],
	D: ["B"],
	E: ["D", "F"],
	F: [],
};

function BFS(startNode, endNode) {
	let queue = [startNode];
	let seen = {};
	while (queue.length) {
		const currNode = queue.shift();
		if (!seen[currNode]) {
			seen[currNode] = true;
			if (currNode === endNode) return true;
			queue = [...queue, ...adjacencyList[currNode]];
		}
	}
	return false;
}

BFS('A', 'D');
