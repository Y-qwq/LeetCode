/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let max = null;
    while (start < end) {
        let area = Math.min(height[start], height[end]) * (end - start);
        max = area > max ? area : max;
        height[start] > height[end] ? end-- : start++;
    }
    return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))