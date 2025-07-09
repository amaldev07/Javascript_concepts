function getCompromisedSubarrayCount(arr) {
    const n = arr.length;
    let result = 0;
    // Preprocess: map value -> list of indices
    const valueIndices = new Map();
    for (let i = 0; i < n; i++) {
        if (!valueIndices.has(arr[i])) valueIndices.set(arr[i], []);
        valueIndices.get(arr[i]).push(i);
    }
    let prev = new Map();
    for (let i = 0; i < n; i++) {
        const curr = new Map();
        curr.set(arr[i], i);
        for (const [orVal, startIdx] of prev) {
            const newOr = orVal | arr[i];
            if (!curr.has(newOr) || curr.get(newOr) > startIdx) {
                curr.set(newOr, startIdx);
            }
        }
        for (const [orVal, startIdx] of curr) {
            // Binary search: is orVal in arr[startIdx..i]?
            const idxList = valueIndices.get(orVal);
            if (!idxList) continue;
            // Find if any idx in idxList is between startIdx and i
            let l = 0, r = idxList.length - 1, found = false;
            while (l <= r) {
                const m = (l + r) >> 1;
                if (idxList[m] < startIdx) l = m + 1;
                else if (idxList[m] > i) r = m - 1;
                else { found = true; break; }
            }
            if (found) result++;
        }
        prev = curr;
    }
    return result;
}