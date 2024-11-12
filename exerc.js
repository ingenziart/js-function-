/*1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223*/


const reversed=function(n){
    n=n.toString();//converting n to string.
    return n.split('').reverse().join('')
}
console.log(Number(reversed(32243)))

/*Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

 */

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
console.log(student)
delete student.rollno
console.log(student) 

/*3. Write a JavaScript program to get the length of a JavaScript object.
Sample object : */

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

const length=Object.keys(student).length
console.log(length)

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }]


const t=Object.keys(library)
t.readingStatus
console.log(t)