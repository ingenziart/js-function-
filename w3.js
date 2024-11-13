//block and grobal scope 

/* let and const are block scope while var are grobal scope*/

//the difference bettwen let,const with var 
//1 var can be redeclard for example var x=0 and let var x="januzaj" while other can't

const cars=["bmw","lambo","volvo"]
cars[0]="toyota"
console.log(cars)

const cars=["bmw","lambo","volvo"]
cars.push("audi")
console.log(cars)

//function

let x=myfunction(3,4)
function myfunction(a,b){
    return a*b
}
console.log(x)

// another way.
function myfunction(a,b){
    return a*b
}
console.log(myfunction(3,4))

// changing from celcius to farhenight

let value =tocelsius(77)

function tocelsius(farhenight){
    return (5/9)*(farhenight-32);
}
console.log(value)

//local variable , variable used inside the function

function mycar(){
    let carName="volvo"
    console.log(carName)
}
mycar()
// OBJECT 

let car ={
    name:"fiat",
    modal:"fiat12",
    year:2024
}
console.log(car.year)

const person={
    firstName:"aime",
    lastName:"januzaj",
    DOB:2000
}
console.log(person.lastName)

// create object with an empty 

const person1={}
person1.name="januzaj";
person1.dob="2000"
person1.hobby="coding"

console.log(person1)

const person2 = new Object();

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
console.log(person2)
//delete
const person1={}
person1.name="januzaj";
person1.dob="2000"
person1.hobby="coding"

console.log(delete person1.dob)
console.log(person1)
 
//nesting object

const myobject={
    name:"aime",
    year:2000,

    mycar4:{
        name1:"bmw",
        year2:2024

    }
    
}



myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

  //obect method with (this) property
  const person4={
    firstName:"aime",
    lastName:"januzaj",
    DOB:2000,
    fullName:function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(person4.fullName())

//object display 

//by lop

const person5={
    firstName:"aime",
    lastName:"januzaj",
    DOB:2000
}

let text=""
for(let i in person5){
    text+=person5[i]+" ";
}
console.log(text)

const person6={
    firstName:"aime",
    lastName:"januzaj",
    DOB:2000
}

const myarrays=Object.values(person6)
console.log(myarrays)

// using JSON stingify

const person7={
    firstName:"aime",
    lastName:"januzaj",
    DOB:2000
}

const json=JSON.stringify(person7)
console.log(json)

// object construction using function

const myperson1=function(firstname,lastname,age){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age
}
console.log(myperson1("firstname","lastname","50"))

let text1 = "HELLO WORLD";
let char = text1.charAt(2);
console.log(char)

//template
let mytext=`hello me`
console.log(mytext)

const firstname1="aime"
const lastname2="januzaj"

console.log(`my name is ${firstname1+" "+lastname2}`)

let z = 100 / "Apple";
isNaN(z);
console.log(z)

// js number method

let p = 123;

console.log(p)

//array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let m=fruits.toString()
console.log(m)

// array join
const myfluits=["Banana","pear","mango","brueberry"]
let t=myfluits.join(" ")
console.log(t)

//arrray flat

const myArr = [[1,2],[3,4],[5,6]];
let s=myArr.flat()
let o=s.toString()
console.log(o)

const fruits5 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits5.indexOf("Apple")+1
console.log(position)

// sort and reverse
const fruits6 = ["Apple", "Orange", "Apple", "Mango"]
let ko=fruits6.reverse()
let me=ko.sort()
console.log(ko)

//js array iteration 

// foreach ()

const numbers=[45,12,27,89,76]


let text2="";
numbers.forEach(myfunction)
function myfunction(index,value){
    text2+=index + " "
}
console.log(text2)

const country=["rwanda","kenya","uganda"]

let newcount="";
country.forEach(myfunction);

function myfunction(index){
    newcount+=index +" "
}
console.log(newcount)

//map

const numbers1=[12,6,56,7,8,34]
const numbers2=numbers1.map(myfunction);
function myfunction(value,index,array){
    return (value*2)
}
console.log(numbers1)
console.log(numbers2)

// filter method 
const numbers3=[12,6,56,7,8,34]
const numbers4=numbers3.filter(myfunction);
function myfunction(value){
    return value >18
}
console.log(numbers4)

//foreach its like normsr forloop display 
//map is dipsy value with out change first array 
//filter is sort of value depend on condition setted .

// dates js

const date= new Date();
console.log(date+" ")

const month=new Date()
x=month.getMonth()
console.log(x)

// random

const randomNumber=Math.floor(Math.random()*10);
console.log(randomNumber)

//if else 
if(new Date().getHours()>22){
    greating="good morning"
}
else{
    greating="good night"
}


console.log(greating)

month=new Date().getMonth();
if(month>7){
    application="open"
}
else{
    application="closed"
}
console.log(application)

// switch

const days=new Date().getHours();



switch(days){
    case 0:
        dayi="sunday";
        break;
    case 1:
        dayi="monday"
        break;
    case 2:
        dayi="tuesday";
        break
    case 3:
        dayi="wednesday"
        break
    case 4 :
        dayi="thursday"
        break
    default:
        dayi="not this one"

}
console.log(dayi)

let r = 0;
switch (r) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text)

let hobie="tenis"
switch(hobie){
    case "football":
        console.log("yes")
        break
    case "basketball":
        console.log("N0")
        break
    default:
        console.log("none")
}
console.log(hobie)

// for loop 

const cars1=["toyota","porche","bmw","benz"]
let newcar=""
for (i=0;i<cars1.length;i++ ){
    newcar+=cars1[i]+ " "
}
console.log(newcar)

let text3=""
for (i=0;i<5;i++){
    text3+="the number is"+[i]+ " "
}
console.log(text3)