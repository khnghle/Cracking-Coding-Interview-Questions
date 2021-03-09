class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BT {
  constructor() {
    this.root = null;
  }
  
  addNode(val) {
    const newNode = new Node(val);
    
    if(!this.root) {
      this.root = newNode
      return this;
    }

    let queue = [this.root];

    while (true) {
      let currNode = queue.shift();
      if (!currNode.left) {
        currNode.left = newNode;
        return this;
      }
      if (!currNode.right) {
        currNode.right = newNode;
        return this;
      }
      queue.push(currNode.left);
      queue.push(currNode.right);
    }
  }

  addArray(array){
    array.forEach(currVal => this.addNode(currVal))
    return this;
  }

  getTree() {
    return this.root;
  }
}

module.exports = BT;
