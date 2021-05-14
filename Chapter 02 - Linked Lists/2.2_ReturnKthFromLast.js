const LinkedList = require("./utils/SinglyLL");

/*
  Appoach have 2 pointers
  p1 and p2 will be k nodes away.
  Move up by one til p2 is at the tail
  return p1
*/

function kthFromLast (linkedList, k) {
  let p1 = linkedList.head;
  let p2 = linkedList.head;

  for(let i =0; i < k; i++){
    if(p2) p2 = p2.next;
    //checks to see if the end is hit
    else return null
  }

  while(p2 !== linkedList.tail){
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1.value
}

const LL = new LinkedList()
LL.addArray([ 5, 4, 3, 2, 1, 0 ])

const alteredLL = kthFromLast(LL, 1)
console.log(alteredLL)