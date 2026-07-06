// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

//Using Map
// TC: O(n) SC: O(n)
var twoSum = function (numbers, target) {
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        if (map.has(complement)) {
            return [map.get(complement) + 1, i + 1];
        }
        map.set(numbers[i], i);
    }
};


//Using Two-Pointers
// TC: O(n) SC: O(1)
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
