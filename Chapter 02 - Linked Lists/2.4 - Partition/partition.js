const LinkedList = require("../utils/SinglyLL");

// T pointer to traverse the LL
// S pointer to keep track of the node we want to swap our T pointer with

// while T is not at the end
// if the T < 5 switch S and T and move up both
// if T >=5 move up T

function partition(linkedList, p) {
  let sPointer = linkedList.head; //swaps
  let tPointer = linkedList.head; //traverse

  while (tPointer) {
    if (tPointer.value < p) {
      let tempVal = sPointer.value;
      sPointer.value = tPointer.value;
      tPointer.value = tempVal;

      sPointer = sPointer.next;
    }

    tPointer = tPointer.next;
  }
}

const LL = new LinkedList();
LL.addArray([1, 2, 6, 4, 3, 7, 8, 2]);
partition(LL, 5);
LL.traverseTree();
