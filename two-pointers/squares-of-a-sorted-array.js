// https://leetcode.com/problems/squares-of-a-sorted-array/

//Using two pointers
// TC: O(n) SC: O(n)
var sortedSquares = function (nums) {
    let n = nums.length;
    let result = new Array().fill(0);

    let left = 0; right = n - 1;
    for (let i = n - 1; i >= 0; i--) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++
        } else {
            result[i] = rightSquare;
            right--
        }
    }
    return result;
};

let nums = [-4, -1, 0, 3, 10]
console.log(sortedSquares(nums));
