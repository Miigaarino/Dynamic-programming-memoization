// const canConstruct = (target, wordBank) => {
//   if (target === "") return true;

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       if (canConstruct(suffix, wordBank) === true) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

//"enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]
//m = target.length    15
//n = wordBank.length  7

//Brute force

//time:  O(n^m*m)      71,213,422,649,145
//space: O(m^2)        225

//Memoized

//time:  O(n*m^2)      1575
//space: O(m^2)        225

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
