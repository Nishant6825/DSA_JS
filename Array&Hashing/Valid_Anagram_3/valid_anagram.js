var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const countMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (countMap.has(s[i])) {
      countMap.set(s[i], countMap.get(s[i]) + 1);
    } else {
      countMap.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!countMap.has(t[i])) return false;
    countMap.set(t[i], countMap.get(t[i]) - 1);
    if (countMap.get(t[i]) < 0) return false;
  }
  return true;
};
