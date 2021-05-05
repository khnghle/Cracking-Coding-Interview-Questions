/*
- 2.5 : _Sum Lists_ You have two numbers represented by a linked list, 
where each node contains a single digit. The digit are stored in reverse order, 
such that the 1's place is at the head of the list. Write a function that adds
 two numbers and returns the sum as a linked list. You are not allowed to cheat
  and convert the linked list to an integer. 
  Example: 
  input: (7 - 1 - 6) + (5 - 9 - 2)
  output: (2 - 1 - 9)
*/

const LinkedList = require("../utils/SinglyLL");

function findSum (num1 = 0, num2 = 0, remainder = 0){
  let sum = num1 + num2 + remainder;
  
  if (sum > 9) {
    remainder = 1;
    sum = sum % 10;
  } else remainder = 0
  
  return [sum, remainder]
}

function sumLists(ll1, ll2) {
  let currNode1 = ll1.head;
  let currNode2 = ll2.head;
  let tmp = 0;

  const sumLL = new LinkedList();
  
  while (currNode1) {
    const [sum, remainder] = findSum(currNode1.value, (currNode2 ? currNode2.value : 0), tmp)
    tmp = remainder;
    sumLL.addVal(sum);

    currNode1 = currNode1.next;
    currNode2 = currNode2 ? currNode2.next : currNode2;
  }

  while (currNode2) {
    const [sum, remainder] = findSum(null, currNode2.value, tmp)
    tmp = remainder;

    sumLL.addVal(sum);
    currNode2 = currNode2.next;
  }

  if(tmp) sumLL.addVal(tmp)

  return sumLL;
}

const LL1 = new LinkedList();
LL1.addArray([9,9,9]);
const LL2 = new LinkedList();
LL2.addArray([9,9]);


const newList = sumLists(LL1, LL2);
newList.traverseTree();
