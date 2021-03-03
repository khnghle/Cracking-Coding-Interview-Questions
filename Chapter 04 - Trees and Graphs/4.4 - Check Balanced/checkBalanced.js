const BST = require("../utils/BST");
/*
Pass
      5
   /     \
  3       8
 /       / \
1       7   9
       /
      6

     5
    /  \
   4   null
  /  \
null null

     5       L(0) R(3)  Return(Math.max(L, R) + 1) --> return 2
    /  \
 null   6    L(0) R(3) Return(Math.max(L, R) + 1) --> return 1
      /   \
    null null
*/

function checkSubTree(root) {
  if(!root) return 0; 
  const hLeft = checkSubTree(root.left)
  const hRight = checkSubTree(root.right)
  // once we know its unbalanced keep passing -Infinity up
  if (hRight === -Infinity || hLeft === -Infinity) return -Infinity

  // if NOT balanced 
  if (Math.abs(hLeft-hRight)>1) return -Infinity
  // if balanced
  else {
    const max = Math.max(hLeft, hRight) + 1
    return max
  }
}

function checkBalanced(root){
  // if -Infinity return false
  return checkSubTree(root) !== -Infinity
}

const testCase1 = [1, 2, 3]; //fail
const testCase2 = [5, 3, 8, 1, 4, 7]; //pass
const testCase3 = [5, 3, 8, 1, 4, 7, 6]; //fail

const testBST1 = new BST();
const testBST2 = new BST();
const testBST3 = new BST();

testBST1.addArray(testCase1);
testBST2.addArray(testCase2);
testBST3.addArray(testCase3);

const result1 = checkBalanced(testBST2.getTree())
console.log(JSON.stringify(result1));
