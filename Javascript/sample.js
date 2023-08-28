// document.getElementById('main-1').innerHTML;
// document.write('hello welcome')
// console.log('error in page')
// alert('reload again')
// prompt("enter password")

//Arithmetic operator
var a = 10, b = 15
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//Assignment
var x = 10
console.log(x += 3)
console.log(x -= 4)
console.log(x *= 4)
console.log(x /= 4)
console.log(x %= 4)

//comparison
var a1 = 10, b1 = 11
console.log(a1 == b1)
console.log(a1 === b1)
console.log(a1 > b1)
console.log(a1 < b1)
console.log(a1 >= b1)
console.log(a1 <= b1)
console.log(a1 != b1)

//logical
console.log((a1 < 11) && (b1 < 12))
console.log((a1 >= 11) || (b1 >= 12))
console.log(!(a1 < 11) || (b1 < 12))

var obj = {
    name: "maichel", age: 31, gender: "male"
}
console.log(obj)
var arr = ["aaa", "bbb", "ccc"]
console.log(arr)

var name1 = "maichel"
console.log(name1.slice(1, 5))
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.indexOf("h"))
console.log(name1.length)

//bitwise operator
let ab = 25, bc = 10;
console.log(ab & bc, "bitwise")
console.log(ab | bc, "bitwise")

//object concepts
//method 1
var obj = {
    empid: "emp123",
    name: "aaaa",
    address: "adfdfkjkl",
    mobile: 9876543210
}
console.log(obj, "method 1")

//method 2
var obj1 = {}
obj1.empid = "adfdf"
obj1.name = "adffd"
obj1.address = "adfd"
obj1.mobile = 9876543210
console.log(obj1, "method 2")

//method 3
var obj2 = new Object();
obj2.empid = "adfdf"
obj2.name = "adffd"
obj2.address = "adfd"
obj2.mobile = 9876543210
console.log(obj2, "method 3")

//object accessing method
//dot method
//square method
//destructuring
console.log(obj.address, "dot method")
console.log(obj["name"], "square method")
let { mobile, empid } = obj2
console.log(mobile, "destructuring")

//Array of object
var arrayofobject = [
    {
        empid: "emp123",
        name: "aaaa",
        address: "adfdfkjkl",
        mobile: 9876543210
    },
    {
        empid: "emp123",
        name: "aaaa",
        address: "adf",
        mobile: 9876543210
    },
    {
        empid: "emp123",
        name: "aaaa",
        address: "asdfdsfasdfsdl",
        mobile: 9876543210
    },
    {
        empid: "emp125",
        name: "aaaa",
        address: "sdfdsfdsfdsl",
        mobile: 9876543210
    }
]
console.log(arrayofobject, "array")
console.log(arrayofobject[3].empid)

var form = {
    name: "adfd",
    password: "dsfdsf"
}
console.log(form)