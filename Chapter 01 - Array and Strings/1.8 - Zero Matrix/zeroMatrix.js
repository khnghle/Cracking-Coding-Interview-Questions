/*
CASE 1: 
[0, 1, 1]   ->   [0, 0, 0]
[1, 1, 1]   ->   [0, 1, 1]
[1, 1, 1]   ->   [0, 1, 1]


CASE 2: 
[0, 0, 1]   ->   [0, 0, 0]
[0, 1, 1]   ->   [0, 0, 0]
[1, 1, 1]   ->   [0, 0, 1]
*/

function zeroMatrix(matrix) {
  let rows = Array(matrix.length);
  let cols = Array(matrix[0].length);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        rows[row] = true;
        cols[col] = true;
      }
    }
  }

  rows.forEach((r, idx) => {
    if(r) matrix[idx].forEach((col, i) => (matrix[idx][i] = 0));
  });

  cols.forEach((c, idx) => {
    if(c) matrix.forEach((row) => (row[idx] = 0));
  });

  return matrix;
}

//TESTING
const arrayMaker = (m, n) => {
  let zeroPresent = false;
  return [...Array(n)].map(() =>
    [...Array(m)].map(() => {
      if (!zeroPresent) {
        if (Math.floor(Math.random() * 100) > 25) {
          zeroPresent = true;
          return 0;
        } else return 1;
      } else {
        return Math.floor(Math.random() * 100) > 90 ? 0 : 1;
      }
    })
  );
};

const arrayOne = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
const arrayTwo = [
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
];
const arrayThree = arrayMaker(5, 4);
console.log("inital", arrayThree);

const test1 = zeroMatrix(arrayOne);
const test2 = zeroMatrix(arrayTwo);
const test3 = zeroMatrix(arrayThree);

console.log({ test3 });
