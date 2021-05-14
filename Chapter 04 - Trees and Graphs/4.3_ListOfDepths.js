const BST = require("../utils/BST");
const LinkedList = require("../utils/LinkedList");
/* 
D1        4
        /   \
D2     2     6
      / \   / \
D3   1   3 5   7

LL1 4
LL2 2-6
LL3 1-3-5-7

Queue1: [4] 
  4 --> LL      Queue2 : [2,6]
    2,6 --> LL       Queue1: [1,3,5,7]

    while(Q1.length)
      shift from Q1 
      add all its children into Q2
      make LL with Q1 and add to arrLL
      Q1 = Q2
    
*/
function listOfDepths(root) {
  let arrLL = [];
  if (!root) return arrLL;

  let q1 = [root]; //current depth
  let q2 = []; //child depth

  while (q1.length) {
    const tempLinkedList = new LinkedList();
    while (q1.length) {
      let tempVar = q1.shift();
      tempLinkedList.addVal(tempVar.value);
      if (tempVar.left) q2.push(tempVar.left);
      if (tempVar.right) q2.push(tempVar.right);
    }
    arrLL.push(tempLinkedList);
    q1 = q2;
    q2 = [];
  }

  // let tempLinkedList = new LinkedList();
  // while (q1.length) {
  //   let tempVar = q1.shift();
  //   tempLinkedList.addVal(tempVar.value);
  //   if (tempVar.left) q2.push(tempVar.left);
  //   if (tempVar.right) q2.push(tempVar.right);

  //   if (q1.length === 0) {
  //     arrLL.push(tempLinkedList);
  //     q1 = q2;
  //     q2 = [];
  //     tempLinkedList = new LinkedList();
  //   }
  // }

  return arrLL;
}

const test = new BST();
test.addArray([4, 2, 6, 1, 3, 5, 7]);
const result = listOfDepths(test.getTree());
console.log(result);
