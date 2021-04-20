/*
As you interate through, keep memo, if present in memo --> delete
Time and Space O(n)

Can you do it without a temporary buffer? 
This typically means you are not allowed to use additional buffer/memory/space proportional to input size.
Constant Size

Solution 1) Sort the LL, iterate through and compare value with next value. If dup, delete 
Time O(n^2) Space O(1)

Solution 2) Start by looking at a node, iterate through the rest of the LL, if dup (delete)
  Do for rest of nodes Time O(n^2) Space O(1)

*/

const LinkedList = require("../utils/SinglyLL");

const removeDups = (linkedList) => {

  let p1 = linkedList.head;
  
  //Pointer 1 want which starts at the head
  while(p1){
    let prevP2 = p1;
    let p2 = p1.next
    
    //Pointer 2 which is compared to pointer 1 for same value 
    while(p2) {
      if (p1.value===p2.value) {
        //Remove by connecting prev to next 
        //We want prevP2 to stay the same value as we delete dups
        prevP2.next = p2.next
      } else {
        //If not same then prevP2 will increment
        prevP2 = p2; 
      }
      //p2 will increment regardless
      p2 = p2.next;
    }

    p1 = p1.next;
  }

  return linkedList;
}

const test = new LinkedList()
test.addArray([ 1, 2, 3, 1, 1 ])

removeDups(test)
test.traverseTree()