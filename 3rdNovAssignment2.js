// Write a JavaScript program that accepts a string and converts only the characters at odd indexes to uppercase. Characters at
// even indexes should remain unchanged.
// Indexing starts from 0. Therefore, indexes 1, 3, 5, and so on are considered odd indexes.
// Example: Input "javascript" should produce "jAvAsCrIpT".

// The program should:
// 1. Declare and initialize a string.
// 2. Traverse the string using a loop.
// 3. Check whether the current index is odd using the modulus operator (%).
// 4. Convert characters at odd indexes to uppercase.
// 5. Keep characters at even indexes unchanged.
// 6. Build and display the resulting string.

// javascript jAvAsCrIpT
// hello hElLo
// testleaf tEsTlEaF
// automation aUtOmAtIoN

let input ="automation";
let convertedValue = ""
    
for (let i=0;i<input.length;i++){
        if (i%2!=0){
            convertedValue=convertedValue+input[i].toUpperCase();
        }
        else{
            convertedValue=convertedValue+input[i];
        }
    }
console.log("Converted value: ",convertedValue);