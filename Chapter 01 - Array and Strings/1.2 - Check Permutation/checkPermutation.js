// - 1.2 : _Check Permutations_ - Given two strings, write a method if one is a permutation of the other.
// same letter but rearranged
function checkPermutations (stringOne, stringTwo){
  stringOne = stringOne.split("").sort().join('')
  stringTwo = stringTwo.split("").sort().join('')

  if(stringOne === stringTwo) return true 
  return false 
}

const test1 = checkPermutations('tree', 'reet')
const test2 = checkPermutations('book', 'cat')

console.log({test1, test2})