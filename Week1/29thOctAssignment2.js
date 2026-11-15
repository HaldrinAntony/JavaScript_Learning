//Write a JAVSCRIPT program to find if the number is a palidrome or not 
function palindrome(num){
    let str = String(num) //type conversion so we can apply for loop in string
    let len = str.length
    // console.log("Coverted value type: ",typeof str)
    console.log("Input value(string type): ", str)
    let revStr = ""
    for (i=len-1;i>=0;i--){
        revStr=revStr+str[i]
        // console.log(`Appending the index ${i} of str to revstr variable:  `,revStr)
    }
    console.log("Reversed value: ",revStr)

    if (str==revStr){
        console.log(`The number ${str} is a palindrome`)
    }
    else {
        console.log(`The number ${str} is not a palindrome`)
    }
}

palindrome(121)
palindrome(1331)
palindrome(123)
palindrome(-121)
palindrome(10)
