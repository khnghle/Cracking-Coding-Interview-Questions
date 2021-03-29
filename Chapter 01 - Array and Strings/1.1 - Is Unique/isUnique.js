function isUniqueWithDataStructure (string) {
  const charCounter = {}

  for(let i =0; i < string.length; i++){
    const currChar = string[i]
    if(!charCounter[currChar]) charCounter[currChar] = 1
    else return false
  }
  return true;
}

function isUniqueWithoutDataStructure (string) {
  for(let i=0; i < string.length; i++){
    const currChar = string[i]

    if(string.indexOf(currChar) !== string.lastIndexOf(currChar)) return false;
  }
  return true
}

const test1 = isUniqueWithoutDataStructure('word')
const test2 = isUniqueWithoutDataStructure('dad')

console.log({test1, test2})