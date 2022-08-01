// ANAGRAMS
// An anagram is a word or phrase formed by changing the order of the letters in another word or phrase.
// For Example: 'race' = 'care', 'life' = 'file' etc

function findAnagram(str1, str2){

    // if both strings length are not equal then obviously they can't be anagram
    if(str1.length !== str2.length){
        return false;
    }
    // initializing the counter object
    let counterObject = {}

    // using for...of loop => To iterate the first string
    // storing the characters and it's occurrence into object
    for(let char of str1) {
        // if char already exists in object increment by 1
        // and if not initialize to 1
        counterObject[char] = ++counterObject[char] || 1;
    }
    for(let char of str2){
        // if char is not present in second string return false
        if(!counterObject[char])
            return false
            // if present decrement 1 the occurrence of character
        else
            counterObject[char] -= 1;
    }
    return true
}

console.log(findAnagram("life","file"));