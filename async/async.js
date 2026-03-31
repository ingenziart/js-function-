
export function asyncRun(){

/*const result =fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>console.log(data))
console.log(result);*/

async function getUser() {

 try{
    const resp=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await resp.json()
    console.log(data);
 }catch(error){
   console.log(error);
    
const name="hell"
 }
    
}
getUser()

}

asyncRun()


