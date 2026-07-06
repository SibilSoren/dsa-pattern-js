// https://leetcode.com/problems/3sum/

//Brute Force
// TC: O(n^3) SC: O(1)

//Better Approach
// TC: O(n^2) SC: O(1)
var threeSum = function (nums) {
    let result = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // Push as an array (a single triplet)
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                
                // Skip duplicates for the second and third elements
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};