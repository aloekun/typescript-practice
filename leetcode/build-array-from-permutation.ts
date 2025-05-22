// This function builds an array based on a permutation of indices.
// It takes an array of integers nums as input, where each element represents an index.
function buildArray(nums: number[]): number[] {
    let ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
};