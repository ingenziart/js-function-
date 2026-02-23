
export function runTypescript(){
    type User={
        name:string
        age :number
        isAdmin:boolean
    }
    const user:User={
        name:"aime",
        age:24,
        isAdmin:true

    }
    console.log(user);
}
runTypescript()