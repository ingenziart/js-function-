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