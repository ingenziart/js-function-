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