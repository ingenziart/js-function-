const age=20;
if(age>=20){
    console.log(age+2) 
}
else{
    console.log(`${age}`) 
}


const years=function(n){
    const voting=20;
    const driving=18;
    
    if(n===voting){
        return ("you can vote")
    
    }
    else if(n===driving){
        return ("you can drive")
    }
    else{
        return ("thsnks")
    }
}
console.log(years(20))
console.log(years(18))
console.log(years(300))

let random=Math.random(1,5)*5
console.log(random)
