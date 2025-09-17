var twoSum = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashMap.has(complement)) {
      console.log("[hashMap.get(complement), i]", [hashMap.get(complement), i]);
      return [hashMap.get(complement), i];
    } else {
      hashMap.set(nums[i], i);
    }
  }
};

twoSum([3, 3], 6);
