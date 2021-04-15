/*

[
 [1     2     3    4],
 [5     6     7    8],
 [9    10    11   12],
 [13   14    15   16],
]

i=0, i<math.floor(arr.length/2), i++ 
j=i, j<array.length - i - 1, j++

i=0, j=0     i=0, j=1     i=0, j=2 
0,0          0,1          0,2      i,j
0,3          1,3          2,3      j,arr.length-i-1
3,3          3,2          3,1      arr.length-i-1, arr.length-j-1
3,0          2,0          1,0      arr.length-j-1, i

i=1, j=1
1,1  i,j
1,2  j, arr.length-i-1
2,2  arr.length-i-1, arr.length-j-1
2,1  arr.length-j-1, i
*/

function rotateMatrix(matrix) {
  //i represents the number of layers within our matrix which we need to rotate
  for(let i = 0; i < Math.floor(matrix.length/2); i ++){

    // j respresents of cycles in a layer
    for(let j = i; j < matrix.length - i - 1; j++){
      const point1 = matrix[i][j]
      const point2 = matrix[j][matrix.length - 1 - i]
      const point3 = matrix[matrix.length - 1 - i][matrix.length - 1 - j]
      const point4 = matrix[matrix.length - 1 - j][i]

      matrix[i][j] = point4;
      matrix[j][matrix.length - 1 - i] = point1;
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = point2;
      matrix[matrix.length - 1 - j][i] = point3;
    }
  }

  return matrix;
}

const arrayMaker = (n) => {
  let counter = 0;
  return [...Array(n)].map(() =>
    [...Array(n)].map(() => {
      counter++;
      return counter;
    })
  );
};
const matrx1 = arrayMaker(4);
console.log('before', matrx1)
const test = rotateMatrix(matrx1)
console.log('after', test)

