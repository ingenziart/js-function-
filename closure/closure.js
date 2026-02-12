
export function counter(){
    let count =0

    return function(){
        count+=3
        console.log(count);
    }

}
const increment=counter()

increment()
increment()


export function greating(name){
    return function(){
        console.log("hello"+name);
    }
}

const hiAime= greating("janu")
const mbabazi= greating("mbabazi")

hiAime()
mbabazi()


export function bankAccount(balance){

    return {
        deposit(money){
        balance+=money
        console.log(balance);
    }}
  
    for (var i=0;i<3;i++){
    setTimeout(()=>console.log(i),100);
    
}

}
const accBalance= bankAccount(100)
accBalance.deposit(30)


for (let  i=0;i<3;i++){
    setTimeout(()=>console.log(i),100);
    
}

