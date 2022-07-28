/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. */

// Brute force
// Complexity O(n^2) => nested loops

// function twoSum(nums, target){
//     let result = [];
//
//     for(let i = 0; i < nums.length - 1; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 result.push(nums.indexOf(nums[i]),nums.indexOf(nums[j]))
//                 return result
//             }
//         }
//     }
// }

//HashMap => Complexity O(n)
function twoSum(nums, target){
	let map = {};
	let result = [];
	for(let i = 0; i < nums.length; i++){
		let diff = target - nums[i];
		if(map[diff] >= 0){
			result.push(map[diff],i);
			return result;
		}else{
			map[nums[i]] = i;
		}
	}
}
let nums = [3,3];
let target = 6;

let result = twoSum(nums, target);

console.log(result)