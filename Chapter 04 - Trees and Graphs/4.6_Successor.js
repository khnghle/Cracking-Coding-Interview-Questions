const BST = require("./utils/BST");

function successor(targetNode, root) {
  const stack = [];
  let currNode = root;

  while (true) {
    if (currNode.value === targetNode.value) {
      if (currNode.right) {
        //go all the way to the left
        currNode = currNode.right;
        while (currNode.left) currNode = currNode.left;
        return currNode;
      }
      if (stack.length) return stack.pop();
      break;
    } 
    
    if (currNode.value > targetNode.value) {
      stack.push(currNode);
      if (currNode.left) currNode = currNode.left;
      else break; // if val does not exist
    } else {
      if (currNode.right) currNode = currNode.right;
      else break; // if val does not exist
    }
  }
  return console.error(
    "you have found the largest value or the value doesn't exist"
  );
}

const newBST = new BST();
const testCase = [3, 1, 7, 0, 2, 5, 10, 4, 6, 8, 9];
newBST.addArray(testCase);

const givenNode = newBST.findVal(0);

console.log(successor(givenNode, newBST.getTree()));
