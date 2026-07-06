// https://leetcode.com/problems/3sum-closest/

// TC: O(n^2) SC: O(1)
var threeSumClosest = function (nums, target) {
    let n = nums.length;
    let closestSum = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                return sum;
            }

            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return closestSum;
};