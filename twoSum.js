function twoSum(nums, target){
    let result = [];

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(nums.indexOf(nums[i]),nums.indexOf(nums[j]))
                return result
            }
        }
    }

}

let nums = [2,7,11,15];
let target = 9;

let result = twoSum(nums, target);

console.log(result)