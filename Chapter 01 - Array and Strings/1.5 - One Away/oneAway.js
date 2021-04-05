/*
{s2)row = i 
{s1}col = j 

matrix[i][j]

Populate first row
Populare first column 

Start at row (i) index of 1

if s1[i] === s2[j] matrix[i][j] = matrix[i-1][j-1]
else matrix[i][j] = Math.min(matrix[i][j-1], matrix[i-1][j])

       Null | p | l | e
Null |  0   | 1 | 2 | 3
p    |  1   | 0 | 1 | 2
a    |  2   | 1 | 1 | 2
l    |  3   | 2 | 1 | 2
e    |  4   | 3 | 2 | 1
*/

function oneAway(s1, s2) {
  let matrix = Array(s1.length + 1)
    .fill([])
    .map(() => Array(s2.length + 1).fill(0));

  matrix[0] = matrix[0].map((n, i) => i);

  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 0; j < s2.length + 1; j++) {
      if (j === 0) matrix[i][j] = i;
      else {
        let s1Char = s1[i - 1];
        let s2Char = s2[j - 1];

        if (s2Char === s1Char) matrix[i][j] = matrix[i - 1][j - 1];
        else
          matrix[i][j] =
            Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) +
            1;
      }
    }
  }

  if (matrix[s2.length][s1.length] > 1) return false;
  return true;
}

const test1 = oneAway("pale", "ple");
const test2 = oneAway("pales", "pale");
const test3 = oneAway("pale", "bale");
const test4 = oneAway("pale", "bake");

console.log({ test1, test2, test3, test4 });
