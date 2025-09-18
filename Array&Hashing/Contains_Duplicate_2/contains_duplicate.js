var containsDuplicate = function (nums) {
  //   let seen = new Set();

  //   seen = new Set([...seen, ...nums]);
  //   if (seen.size !== nums.length) {
  //     console.log("true", true);
  //     return true;
  //   }
  //   console.log('false', false)
  //   return false;

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      console.log("true", true);
      return true;
    }
    seen.add(nums[i]);
  }
  console.log("false", false);
};

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 2, 3, 4]);
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

// var containsDuplicate = function (nums) {
//   const seenArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (seenArray.includes(nums[i])) {
//       console.log("true", true);
//       return true;
//     }
//     seenArray.push(nums[i]);
//   }
//   console.log("false", false);
//   return false;
// };

// var containsDuplicate = function (nums) {
//   let seen = new Set();

//   seen = new Set([...seen, ...nums]);
//   if (seen.size !== nums.length) {
//     console.log("true", true);
//     return true;
//   }
//   console.log("false", false);
//   return false;
// };
