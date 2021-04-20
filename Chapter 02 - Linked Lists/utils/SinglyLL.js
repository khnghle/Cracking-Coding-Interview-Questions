class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = this.tail = null
  }

  addVal(val){
    const currNode = new Node(val);
    if (!this.head) this.head = this.tail = currNode;
    else {
      this.tail.next = currNode;
      this.tail = currNode;
      this.tail.next = null;
    }
    return this;
  }

  addArray(array){
    array.forEach(currVal => this.addVal(currVal))
    return this;
  }

  traverseTree () {
    let currNode = this.head;

    while(currNode){ 
      console.log(currNode.value)
      currNode = currNode.next
    }
  }

  getHead(){
    return this.head
  }

}

module.exports = SinglyLinkedList;
