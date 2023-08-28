// let age = 10
// if (age >= 5) {
//     console.log("eligible")
// } else {
//     console.log("not eligible")
// }

// let num = 20
// if (num == 20) {
//     console.log("match")
// } else {
//     console.log("not match")
// }

//odd or even
var n = 20;
if (n % 2 == 0) {
    console.log("even")
} else { console.log("odd") }


//compare two numbers and display the largest number
var a = 60;
var b = 90;
if (a <= b) {
    console.log("largest")
}
else { console.log("smaller") }

//calculate grade with use of given percentage
var result = prompt("enter your mark");
if (result <= 34) {
    console.log(result, "Fail")
}
else if (result <= 55) {
    console.log(result, "D Grade")
}
else if (result <= 75) {
    console.log(result, "C Grade")
} else if (result <= 85) {
    console.log(result, "B Grade")
} else if (result <= 100) {
    console.log(result, "A Grade")
}
else { console.log("Not Applicable") }