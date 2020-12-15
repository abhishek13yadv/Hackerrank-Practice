function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => a < b); // This sorts inversely
    var a = nums.shift();

    while (a == nums[0]) {
        a = nums.shift();
    }
    a = nums.shift();

    return a;
}
