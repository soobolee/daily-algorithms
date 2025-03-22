/**
 * @param {Function} fn
 * @return {Function}
 */
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

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */