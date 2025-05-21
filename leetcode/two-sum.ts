// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
function twoSum(nums: number[], target: number): number[] {
    // Find index pair
    for (var i = 0; i < nums.length - 1; i++) {
        for(var j = 1; j < nums.length; j++) {
            if (i == j) {
                continue;
            }
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
};