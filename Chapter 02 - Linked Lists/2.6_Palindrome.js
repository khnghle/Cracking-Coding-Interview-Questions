const LinkedList = require("./utils/SinglyLL");

// Reverse the linked list using a stack
function isPalindrome(ll) {
  const stack = [ll.head.value];
  let currNode = ll.head;
  let fastNode = ll.head.next;

  while (fastNode) {
    //In case of odd number
    if (!fastNode.next) fastNode = fastNode.next;
    else {
      currNode = currNode.next;
      fastNode = fastNode.next.next;
    }
    stack.push(currNode.value);
  }

  while (stack.length) {
    if (stack.pop() !== currNode.value) return false;
    currNode = currNode.next;
  }

  return true;
}

const test1 = new LinkedList();
test1.addArray(["r", "a", "c", "e", "c", "a", "r"]);

const test2 = new LinkedList();
test2.addArray(["h"]);

console.log(isPalindrome(test1), isPalindrome(test2));
