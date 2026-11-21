// Write a JavaScript program that accepts an array containing numbers from a consecutive sequence in which exactly one number
// is missing. Identify and display the missing number.
// Example: For the array [1, 2, 3, 5, 6], the missing number is 4.

// The program should:
// 1. Declare and initialize an array of numbers in ascending order.
// 2. Assume the numbers belong to a consecutive sequence with exactly one missing number.
// 3. Traverse the array using a loop and compare neighboring values or use suitable basic logic.
// 4. Identify and display the missing number.
// 5. Test the program with the sample inputs provided

let arrayList=[10, 11, 12, 14, 15, 17]  //[1, 2, 3, 5, 6]
console.log("Input Array: ",arrayList)
let len = arrayList.length
// console.log("The length of the array is :", len)
function findMissingNumbers(list){
    for (i=0;i<len-1;i++){
        firstVal = list[i]+1
        secondVal = list[i+1]
        if (firstVal!=secondVal){
            // console.log("Comparing current value plus one: ", firstVal , " with next value", secondVal)
            console.log("The Missing number is : ",(firstVal))
        }
        else{
            // console.log("Comparing current value plus one: ", firstVal , " with next value", secondVal)
            // console.log("This is not the missing number")
        }
    }
}

findMissingNumbers(arrayList)
