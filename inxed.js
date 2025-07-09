function subarrayBitwiseORs(arr) {
    let res = new Set();     // All distinct ORs
    let cur = new Set();     // ORs ending at current position

    for (let num of arr) {
        let newSet = new Set();
        newSet.add(num);     // Start new subarray with current number

        for (let val of cur) {
            newSet.add(val | num);  // Extend previous subarrays
        }

        cur = newSet;
        for (let val of cur) {
            res.add(val);
        }
    }

    return res.size;
};

subarrayBitwiseORs([1,2,4]);