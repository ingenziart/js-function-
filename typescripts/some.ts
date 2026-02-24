
interface User {
  name: string
  age: number
  isAdmin: boolean
  email?: string  // optional
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
        {name:"aime",age:24,isAdmin:true,email:"hhh"},
        {name:"janu",age:26,isAdmin:false}
     ]

    //console.log(users);

    const names =users.map((username)=> username.name)
   //console.log(names);

   const filtering=users.filter((user)=>user.isAdmin)
   //console.log(filtering);
   //console.log(users);

   function getName(user:User): number {
    return user.age

    
   }
   console.log(getName(user));


   
}
