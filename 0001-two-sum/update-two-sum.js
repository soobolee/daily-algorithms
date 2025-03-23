var twoSum = function(nums, target) {
    const hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        const minusValue = target - nums[i];
        
        if (hash.has(minusValue)) {
            return [hash.get(minusValue), i];
        }

        hash.set(nums[i], i);
    }
};
