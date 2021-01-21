// const allConstruct = (target, wordBank) => {
//   if (target === "") return [[]];

//   const result = [];
//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank);
//       const targetWays = suffixWays.map((way) => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }
//   return result;
// };

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "s", "boar"])
);
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "s",
    "boar",
  ])
);
