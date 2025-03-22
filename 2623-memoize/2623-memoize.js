/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memoArgs = {};

    return function(...args) {
        const key = String(args);

        if (key in memoArgs) {
            return memoArgs[key];
        }

        memoArgs[key] = fn(...args);
        return memoArgs[key];
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