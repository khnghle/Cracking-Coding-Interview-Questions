//WORKS
function isSubstring (sub, string){
  return (string.includes(sub))
}

function stringRotation (str1, str2){
  if(!str1.length || !str2.length) return false;

  //If yuo add two the strings together, you should have a the complete word if the word is rotated 
  const str1Dup = str1 + str1;

  return isSubstring(str2, str1Dup)

}

//isSubstring TEST
// const sub = 'erbottle'
// const string = "waterbottle"

// console.log(isSubstring(sub, string))

//stringRotation Test
const str1 = ''
const str2 = "waterbottle"

console.log(stringRotation(str1, str2))

