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