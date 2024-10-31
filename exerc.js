/*1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223*/


const reversed=function(n){
    n=n.toString();//converting n to string.
    return n.split('').reverse().join('')
}
console.log(Number(reversed(32243)))

