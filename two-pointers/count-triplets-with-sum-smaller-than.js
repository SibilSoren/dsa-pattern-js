// https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1

// TC: O(n^2) SC: O(1)
var countTriplets = (sum, arr) => {
    let n = arr.length;
    let count = 0;
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            let total = arr[i] + arr[left] + arr[right];
            if (total < sum) {
                count += (right - left);
                left++;
            } else {
                right--;
            }
        }
    }
    return count
}

let arr = [5, 1, 3, 4, 7], sum = 12;
console.log(countTriplets(sum, arr))