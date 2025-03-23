function memoize(fn) {
    let memoArgs = new Map();

    return function(...args) {
        const key = String(args);

        if (memoArgs.has(key)) {
            return memoArgs.get(key);
        }

        memoArgs.set(key, fn(...args));
        return memoArgs.get(key);
    }
}
