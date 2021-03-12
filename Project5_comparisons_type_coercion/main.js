// Type of operator

document.write(typeof "Hello World");
document.write("\n")
document.write(typeof "3")
document.write("\n")
document.write(typeof 3)
document.write("\n")

//Infinity Numbers
document.write(2E310);
document.write("\n")
document.write(-3E310);
document.write("\n")

// Boolean Operators
document.write(11 > 100);
document.write("\n");
document.write(6 < 12);
document.write("\n")
document.write(1000 > -1000)
document.write("\n")

// Developers Tools Log
console.log(20  * 5)
document.write("\n")

// Coercion
document.write("40" + 10)
document.write("\n")

// Challenge 7
console.log(6 > 7)

//Comparison
document.write( 1 == 1)
document.write("\n")
document.write(-1 == 1)
document.write("\n")

//Comparison of data

a = 31/10/2021
b = 31/10/2021
c = "5"
d = 5
e = "Fiver"
f = 1

document.write(a === b)
document.write("\n")
document.write(c === d)
document.write("\n")
document.write(c === e)
document.write("\n")
document.write(f === d)
document.write("\n")

// Logical Operators

document.write(2 > 1 && 4 > 3);
document.write("\n")
document.write(2 < 1 && 4 < 3);
document.write("\n")
document.write( 1 < 3 || 10 > 9);
document.write("\n")
document.write(5 > 10 || 10 > 15)
document.write("\n")

// Not Logic
function not_function() {
    document.getElementById("Not").innerHTML = !(1 > 2)
}

function not_function_2() {
    document.getElementById("Not_2").innerHTML = !(1 < 2)
}