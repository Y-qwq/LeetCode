var twoSum = function (nums, target) {
    let i = 0;
    let j = 0;
    for (; i < nums.length; i++) { //第一层循环
        for (j = i + 1; j < nums.length; j++) { //第二层循环                   
            if (nums[i] + nums[j] === target) {
                return i > j ? [j, i] : [i, j];
            }
        }
    }
};