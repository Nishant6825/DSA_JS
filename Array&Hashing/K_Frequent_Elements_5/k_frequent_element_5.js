var topKFrequent = function (array, k) {
    let countMap = new Map()

    for (let i = 0; i < array.length; i++) {
        if (countMap.has(array[i])) {
            countMap.set(array[i], countMap.get(array[i]) + 1);
        } else {
            countMap.set(array[i], 1);
        }
    }

    return Array.from(countMap.entries())
        .sort(([, v1], [, v2]) => v2 - v1)  // sort by value ascending
        .slice(0, k)                        // take first k entries
        .map(([key]) => key);

};

console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2))