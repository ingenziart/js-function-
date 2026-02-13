

export const addinga=()=>{

    function greet(name){
        return "hello " +name
    }
    console.log(greet("aime"));
    //arrow 
    const greeting = (name)=>{
        return "hello"+name

    }
    console.log("arrow",greeting("aime"));
    
    //callback

    function processUser(callback){
        callback("mbabazi")

    }
    processUser(name=>console.log("hello "+name))

    //closure

    function createBankAccount(initialBalance){
        let balance=initialBalance
        return {
            deposit: function(amount){
                balance+=amount
                return balance
            },
            withdraw: function(amount){
                if (amount>balance){
                    return "insufficinent funds"
                }
                balance-=amount
                return balance

            },
            getBalance: function(){
                return balance

            }


        }
    }

    const myAccount=createBankAccount(100)
   console.log(myAccount.deposit(50));
   console.log(  myAccount.withdraw(30));
   console.log(myAccount.getBalance());

   // function
   function createCounter(){
    let count= 0
    return{
        increment: function(){
            count++
            return this
        },
        decrement:function(){
            count--
            return this
        },
        getCount: function(){
            return count
        }
    

    }


   }
   const counting =createCounter()

   console.log(counting.increment());
   console.log(counting.increment());
   console.log(counting.decrement());
   console.log(counting.getCount());

   // 

   function createMultiplier(number){
      return{
        multiplication(input){
            const  multiplications=number*input
            return  multiplications
        },
        division(input){
            const division =number/input
            if(input<number){
                console.log("can not divide");
            }
            return division
        }
      

      }
   }

   const answer=createMultiplier(2)
   console.log(answer.multiplication(5));
   console.log(answer.division(3));
 
   



   


    


}


addinga()