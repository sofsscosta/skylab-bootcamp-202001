
function findIndex(nums, callback) {


    for(var i = 0; i < nums.length; i++) {
        if (callback(nums[i])) return i;
    }
    return -1
}