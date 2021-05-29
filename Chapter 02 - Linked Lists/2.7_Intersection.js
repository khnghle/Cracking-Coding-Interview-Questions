const LinkedList = require("./utils/SinglyLL");

// 1) form 2 stacks
// 2) pop off until the popped off node is different
// 3) return prev common node
function intersection(list1, list2) {
  let stack1 = []
  let currNode1 = list1.head
  while(currNode1) {
    stack1.push(currNode1)
    currNode1 = currNode1.next
  }

  let stack2 = []
  let currNode2 = list2.head
  while(currNode2) {
    stack2.push(currNode2)
    currNode2 = currNode2.next
  }

  let prevCommon = null
  while (stack1.length && stack2.length) {
    let node1 = stack1.pop()
    let node2 = stack2.pop()
    
    if (node1!==node2) break;
    prevCommon = node1
  }
  
  return prevCommon
}

// 1) Get node and check to see if last nodes point to same reference 
// 2) Iterate through nodes at same index til you find intersection 
function intersection2(list1, list2) {
  let length1 = 1
  let currNode1 = list1.head
  while(currNode1.next){
    currNode1 = currNode1.next
    length1++
  }

  let length2 = 1
  let currNode2 = list2.head
  while(currNode2.next){
    currNode2 = currNode2.next
    length2++
  }

  if(currNode1 !== currNode2) return null //there is no intersection 

  currNode1 = list1.head 
  currNode2 = list2.head 

  if(length1 > length2) for(let i = 0; i < length1 - length2; i++) currNode1 = currNode1.next
  else for(let i = 0; i < length2 - length1; i++) currNode2 = currNode2.next
    
  while(currNode1){
    if(currNode1 === currNode2) return currNode1
    currNode1 = currNode1.next
    currNode2 = currNode2.next 
  }
}

const intersectLL = new LinkedList();
intersectLL.addArray([7,2,1])

const test1 = new LinkedList();
test1.addArray([3, 1, 5, 9]);
test1.addNode(intersectLL.head)

const test2 = new LinkedList();
test2.addArray([4,6]);
test2.addNode(intersectLL.head)

const result = intersection2(test1, test2)
console.log(result)