function URLify(string, length) {
  let finalString = "";
  for (let i = 0; i < length; i++) {
    const currChar = string[i];

    if (currChar === " ") finalString += "%20";
    else finalString += currChar;
  }
  return finalString;
}

function URLifyInPlace(string, length) {
  let arr = string.split("");
  for (let i = 0; i < length; i++) {
    if (arr[i] === "_") arr[i] = "%20";
  }

  return arr.slice(0, length).join("");
}

const string = "Mr_John_Smith_________";
const test = URLifyInPlace(string, 13);
console.log(test);
