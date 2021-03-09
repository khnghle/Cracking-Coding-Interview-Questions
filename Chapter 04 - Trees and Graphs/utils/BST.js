class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  addVal(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currNode = this.root;

    while (currNode) {
      if (val < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        } else currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        } else currNode = currNode.right;
      }
    }
  }

  addArray(array){
    array.forEach(currVal => this.addVal(currVal))
    return this;
  }

  getTree() {
    return this.root;
  }

}

module.exports = BST