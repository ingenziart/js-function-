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