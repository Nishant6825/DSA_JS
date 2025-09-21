var groupAnagrams = function (strs) {
  const paramArray = strs;

  if (new Set(paramArray).size <= 1) {
    return [paramArray];
  }
  const resArray = [];
  for (let i = 0; i < paramArray.length; i++) {
    const sortedIItem = paramArray[i].split("").sort().join("");
    const tempArr = [];
    for (let j = i + 1; j < paramArray.length; j++) {
      if (sortedIItem === paramArray[j].split("").sort().join("")) {
        tempArr.push(paramArray[j]);
        paramArray.splice(j, 1);
        console.log("🚀 ~ groupAnagrams ~ paramArray:", paramArray);
      }
    }
    console.log("temp", tempArr);
    tempArr.push(paramArray[i]);
    console.log("temp", tempArr);

    resArray.push(tempArr);
    console.log("resArray", resArray);
  }
  return resArray;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["", "", ""]));
