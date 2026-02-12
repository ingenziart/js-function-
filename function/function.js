

export function myFunction(){
  const user={name:"aime",
    greet:function(){
        console.log(this.name);
    }
  } 
  user.greet()
}

myFunction()

export function add(a,b){
    return a+b;

}

add(2,3)

const greating =function(){
    console.log("ime");
}
greating()


//arrow function

export const adding = (a,b)=> a+b;



console.log(adding(10,10));

