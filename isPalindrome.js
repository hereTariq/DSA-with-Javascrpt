// check whether a number is a palindrome number or not
// Given an integer num, return true if num is palindrome otherwise false.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not. -121 is not palindrome because from left to right it is -121 and from right to left it is 121-

function isPalindrome(num){
    // if num is negative integer then it is not palindrome so i'm returning false
    if(num < 0){
        return false;
    }
    // if num is positive number
    // num is assigned to a temporary(temp) variable
    let temp = num;
    let reverse = 0;
    // REVERSING THE DIGITS
    // iterating until temp == 0(means as long as temp is greather than zero the loop will continue)
    while(temp){
        let lastDigit = temp % 10;
        reverse = reverse * 10 + lastDigit;
        temp = Math.floor(temp / 10)
    }
    if(num === reverse)
        return true;
    return false;
}

console.log(isPalindrome(121))
console.log(isPalindrome(123))
console.log(isPalindrome(-232))
console.log(isPalindrome(90))