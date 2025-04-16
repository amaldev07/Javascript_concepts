function add(a, b) {
    console.log('Calculating...');
    return a + b;
}

const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // Calculating... 5
console.log(memoizedAdd(2, 3)); // 5 (cached)
