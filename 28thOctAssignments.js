// Write a JavaScript program that accepts a student's mark (0–100) and displays the grade using the following rules:
// • 90–100: Grade A
// • 80–89: Grade B
// • 70–79: Grade C
// • 60–69: Grade D
// • 50–59: Grade E
// • 0–49: Grade F (Fail)
// • Below 0 or above 100: Invalid mark

var mark = -10;

if(mark>=90 && mark<=100) {
    console.log("Marks Obtained",mark," : Grade A")
}
else if(mark>=80 && mark<=89) {
    console.log("Marks Obtained",mark," :Grade B")
}
else if(mark>=70 && mark<=79) {
    console.log("Marks Obtained",mark," :Grade C")
}
else if(mark>=60 && mark<=69) {
    console.log("Marks Obtained",mark," :Grade D")
}
else if(mark>=50 && mark<=59) {
    console.log("Marks Obtained",mark," :Grade E")
}
else if(mark>=0 && mark<=49) {
    console.log("Marks Obtained",mark," :Grade F (Fail)")
}
else {
    console.log("Marks Obtained",mark," :Invalid Mark")
}