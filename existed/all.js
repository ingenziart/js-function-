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

const ages=34;
const text="my name is januzaj and my age is"+" "+`${ages}`
console.log(text)

// for forEach

const country=["rwanda","usa","canada","italy"]

let newcountrylist=""
country.forEach(myfunction)

function myfunction(index){
    newcountrylist+=index + " "
}

console.log(newcountrylist)

// map

const numbers=[12,3,34,56]
const number2=numbers.map(myfunction);
function myfunction(value,index,array){
    return (value*2)
} 
console.log(numbers)
console.log(number2)

// for loop

const numbers1=[12,3,34,56]

let newnumber="";
for(i=0;i<numbers1.length;i++){
    newnumber+=numbers1[i]+ " "
}
console.log(newnumber)

const personn={
    fnane:"aime",
    lname:"januzaj",
    age:24
}

let me="";

for (let x in personn){
    me+=personn[x]+" "
}
console.log(me)

const date= new Date()
x=date.getDay()
console.log(x)


const number=[1,2,3,4,5]
let numbe=""
for(let i in number){
    numbe+=number[i]+" "
}
console.log(numbe)