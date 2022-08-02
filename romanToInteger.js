// convert roman numbers into integers
/*
    roman numbers
    I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
    Roman numbers are usually written largest to lowest from left to right
    For example, 2 is written as II in Roman numerals. 12 is written as XII which is simply X + II.
    The numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
    the same goes for 9, 40, 90, 400, and 900
*/

function romanToInteger(romanString){
//    creating an object which contains all the roman numerals and values corresponding to it
    let romanNumbers = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
        '4' : 4,
        '9' : 9,
        '40': 40,
        '90': 90,
        '400': 400,
        '900': 900
    };

//    iterating through all the character of the romanString
    let integerSum = 0;
    for(let i = 0; i < romanString.length; i++){
        // comparing first character with second character in the string it first character is smaller than second then we'll subtract it
        // otherwise directly add it to the integerSum variable
        // all the comparison done by the romanNumbers object
        if(romanNumbers[romanString[i]] < romanNumbers[romanString[i + 1]]){
            integerSum += romanNumbers[romanNumbers[romanString[i + 1]] - romanNumbers[romanString[i]]];
            i++
        }else{
            integerSum += romanNumbers[romanString[i]]
        }
    }
    return integerSum;
}

console.log(romanToInteger('MCMXCIV'))
console.log(romanToInteger('LLV'))