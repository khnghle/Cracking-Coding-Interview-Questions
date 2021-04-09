
function stringCompression(str) {
  if (str.length <= 1) return str;

  let counter = 1;
  let finalStr = "";

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[i]) {
      finalStr += `${counter}${str[i - 1]}`;
      counter = 1;
    } else counter++;
    

    if (i === str.length - 1) {
      finalStr += `${counter}${str[i]}`;
    }
  }
  return finalStr.length < str.length ? finalStr : str;
}

const test1 = stringCompression("aabccccaaa");
const test2 = stringCompression("abc");
const test3 = stringCompression("a");
console.log({ test1, test2, test3 });
