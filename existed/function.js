/*functiuon is the way of wrapping programm in value that has many uses, function help us to structure program that helpn us reduce repetion */

const square =function(x){return x*x};
console.log(square(12))

const make_moise=function(){console.log("ping")}
make_moise

//grobal and local scope 
//nested function by definning function method
const study=function(){
    let studying="by choise"
    const outside=function(){
        let gone="like it"
        console.log(studying)
        console.log(gone)
    }
    outside()
}
study()

const years =function(){
    let my_age=20;
    const achievement=function(){
        let property="house"
    
        console.log(my_age)
        console.log(property)
    }
    achievement()
}
years()

const first=function(){
    let x=20;
    const second=function(){
        let y=30;
        console.log(x+y)
    }
    second()
}
first()
 
 const remaining=function(n,divident){
    let remeinder=n%divident;
    return (remeinder-1)
    
 }
console.log(remaining(100,5))

//there are two way of defining function (function declaration and function expression)

//function declaration

function sum(c,b){
     c=10
     b=20
    return c+b

}
console.log(sum())

//function expression

const sum=function(a,b){
    a=20
    b=20
    return a+b
}
console.log(sum())
// cnanging object 
const myfunc=function(manufacturing){
    manufacturing.make="toyota";}
    const my_car={
        make:"honda",
        model:"accord",
        year:1998
    }

    console.log(my_car.make)
    myfunc(my_car)
    console.log(my_car.make)


    const name=function(names){
        names.first="ingenzi"
    }

    const details={
        first:"januzaj",
        year:2000
    }
 
console.log(details.first)
name(details)
console.log(details.first)
//on array 

function my_array(array){
    array[0]=30;
}
const thearray=[45];
console.log(thearray[0])
my_array(thearray)
console.log(thearray[0])


function myarray2(array){
    array=[1,2,3,4]
}
const array2=[4,3,2,1]
console.log(array2)
myarray2(array2);
console.log(array2)

function factorial1(n){
    if(n===0||n===1){
        return 1;
    }
    else{
        return n* factorial1(n-1)
    }
}



console.log(factorial1(1)); // 1
console.log(factorial1(2)); // 2
console.log(factorial1(3)); // 6
console.log(factorial1(4)); // 24
console.log(factorial1(5)); // 120


