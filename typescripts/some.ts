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
    const printUser=(user:User): void=>{
        console.log(user.name); 
       

    }
     printUser(user)

     const users:User[]=[
        {name:"aime",age:24,isAdmin:true},
        {name:"janu",age:26,isAdmin:false}
     ]
    //console.log(users);

    const names =users.map((username)=> username.name)
   //console.log(names);

   const filtering=users.filter((user)=>user.isAdmin)
   console.log(filtering);
   
}
