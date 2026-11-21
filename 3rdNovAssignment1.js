// Write a JavaScript program that accepts two strings and checks whether they are anagrams of each other.
// Two strings are anagrams if they contain the same characters with the same frequency, regardless of character order. For
// example, listen and silent are anagrams.

// The program should:
// 1. Accept or declare two input strings.

function checkforAnagrams(firstInput,secondInput){
    // 2. Convert both strings to the same case so the comparison is case-insensitive.
    // 3. Ignore spaces in both strings before comparing them.
    let firstString = firstInput.toUpperCase().replace(/\s/g,""); // /.../ - regular exp; \s - whitespace;g - global;""-empty string
    // console.log(firstString);
    let secondString = secondInput.toUpperCase().replace(/\s/g,"");
    // console.log(secondString);

    // 4. Check whether both processed strings have the same length.
    let lenStr1 = firstString.length;
    let lenStr2 = secondString.length;
    if (lenStr1!==lenStr2){
        console.log(`The strings ${firstString} and ${secondString} are Not Anagrams`);
        return; // This will return the result without continuing further
    }
    // 5. Compare the characters and their frequencies in both strings.
    // 6. Display whether the given strings are anagrams or not.
    let completedIndex=[]
    let matchedCount = 0
    
    for (let i=0;i<lenStr1;i++){
        // console.log(completedIndex)
        for (let j=0;j<lenStr2;j++){
            if (firstString[i]===secondString[j] && completedIndex[j]!==j){
                // console.log(`The char ${i}, ${firstString[i]} is equal to ${j}, ${secondString[j]} and  available in the secondString`);
                matchedCount++;
                completedIndex[j]=j; // To ensure and track the compared character in the second string
                break;
            }
    }
}
    if (matchedCount===lenStr1){
        console.log(`The strings ${firstString} and ${secondString} are Anagrams`)
    }
    else{
        console.log(`The strings ${firstString} and ${secondString} are Not Anagrams`)
    }
}

checkforAnagrams("listen","silent");
checkforAnagrams("triangle","integral");
checkforAnagrams("hello","world");
checkforAnagrams("Debit Card","Bad Credit");
checkforAnagrams("aabb","abbb");