var groupAnagrams = function (strs) {
  if (new Set(strs).size <= 1) {
    return [strs];
  }
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(strs[i]);
    } else {
      map.set(sortedStr, [strs[i]]);
    }
  }
  return Array.from(map.values());
};

// var groupAnagrams = function (strs) {
//   const map = new Map();

//   for (let i = 0; i < strs.length; i++) {
//     let alphabetCount = new Array(26).fill(0);

//     for (let j = 0; j < strs[i].length; j++) {
//       const charCode = strs[i].charCodeAt(j) - 97;
//       alphabetCount[charCode]++;
//     }
//     if (map.has(alphabetCount.toString())) {
//       map.get(alphabetCount.toString()).push(strs[i]);
//     } else {
//       map.set(alphabetCount.toString(), [strs[i]]);
//     }
//   }
//   return Array.from(map.values());
// };

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["", "", ""]));
