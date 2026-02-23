 type User={
        name:string
        age :number
        isAdmin:boolean
    }
export function runTypescript(){
   
    const user:User={
        name:"aime",
        age:24,
        isAdmin:true,
       

    }
    function printUser(user: User){
        console.log(user.name);
      


    }
    
    printUser(user)
   
}
