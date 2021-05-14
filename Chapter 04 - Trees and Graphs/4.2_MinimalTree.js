//- 4.2 : *Minimal Tree* - Given a sorted (increasing order) array with unique integer elements,
//write an algorithm to create a binary search tree with minimal height
class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

/* Approach : grab mid value --> root
  Left and right array
    grab mid value (Left array)  --> Left
    grab mid value (right array) --> right
  If array of 1
    pass back node with element 
  If empty array
    pass back null? 
    [1,2,3,4,5,6,7]
    4  V(4) L [1,2,3] R [5,6,7]
   / \
  2   6  V(2) L[1] R[3]    V(6) L[5] R[7]


    3  V(3) L [1,2] R [4,5]
   / \
  1   4  V(1) L[] R[2]  V(4) L[] R[5]

     3  V(3) L [1,2] R [4,5,6]
   /   \
  1     5  V(1) L[] R[2]  V(4) L[4] R[6]
   \   / \
    2 4   6

    this.left = recursiveFunc(smallerArrLeft)
*/

const minHeightBST = (arr) => {
  const midVal = Math.floor((arr.length - 1) / 2);
  const root = new Node(arr[midVal]);

  if (arr.length === 1) return root;
  if (!arr.length) return null;

  const leftArr = arr.slice(0, midVal);
  const rightArr = arr.slice(midVal + 1);

  root.left = minHeightBST(leftArr);
  root.right = minHeightBST(rightArr);

  return root;
};

/*   
   |                          
  [1,2]   V(1) left[0] ; right[1] ; mid[0]
   |
  
   root.left v(null) left[0]; right[-1]
   root.right v(2) left[1]; right[1]
   
  Helper function (leftIdx, rightIdx)
  root.left = recursiveFunc(leftIdx, midIdx - 1)
  root.right = recursiveFunc(midIdx + 1, rightIdx)
  if pointer are the same return node
  if pointer are only 1 part
      rightIdx < leftIdx return null 
*/

const minHeightBSTwithPointers = (arr) => {
    let p1=0;
    let p2=arr.length-1;

    const helper=(p1, p2)=>{
        const midIdx = Math.floor((p1 + p2) / 2);
        const root = new Node(arr[midIdx]);
        if (p1===p2) return root
        if (p1>p2) return null
        
        root.left = helper(p1, midIdx-1)
        root.right = helper(midIdx+1, p2)
        return root
    }
  
    return helper(p1,p2)
}

const testCase1 = [1, 2, 3, 4, 5, 6, 7];
const testCase2 = [1, 2, 3, 4, 5];
const testCase3 = [1, 2, 3, 4, 5, 6];
const testCase4 = [];

const result1 = minHeightBSTwithPointers(testCase1);
const result2 = minHeightBSTwithPointers(testCase2);
const result3 = minHeightBSTwithPointers(testCase3);
const result4 = minHeightBSTwithPointers(testCase4);

console.log(JSON.stringify(result3));
