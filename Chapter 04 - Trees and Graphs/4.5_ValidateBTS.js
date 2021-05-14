const BST = require("./utils/BST");
const BT = require("./utils/BT");

function validateBTS(root) {
  //Base case
  if (!root) return true;

  if (root.left && root.left.value >= root.value) return false;
  if (root.right && root.right.value < root.value) return false;

  //Recursive case
  if (!validateBTS(root.left)) return false; // if false return false, if true keep going
  if (!validateBTS(root.right)) return false;

  return true;
}

const testCase1 = [3, 6, 2, 4, 5, 1];
const testCase2 = [3, 6, 2, 4, 5, 1];

const newBST = new BST();
const newBT = new BT();

newBST.addArray(testCase1);
newBT.addArray(testCase2);

const result1 = validateBTS(newBST.getTree()); //true
const result2 = validateBTS(newBT.getTree());

console.log(result2);
