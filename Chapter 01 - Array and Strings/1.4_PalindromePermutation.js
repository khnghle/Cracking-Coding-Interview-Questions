function palindromePermutation(string) {
  let charCounter = 0;
  let memo = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      charCounter++;
      if (!memo[string[i]]) memo[string[i]] = 1;
      else memo[string[i]]++;
    }
  }
  let seenOdd = 0;

  for (let key in memo) {
    if (memo[key] % 2) seenOdd++;
    // if charCounter is even
    if (!(charCounter % 2) && seenOdd) return false;
    // if charCounter is odd
    if (charCounter % 2 && seenOdd > 1) return false;
  }

  return true;
}

const test1 = palindromePermutation("tact coa");
const test2 = palindromePermutation("a dad");
const test3 = palindromePermutation("pizza pie");

console.log({ test1, test2, test3 });
