

export function objectRun(){

    //object 
    const user ={
        name:"AIME",
        email:"aimembabazi@gmail.com",
        role: "admin"
    }
    console.log(user);

    const movie={
        title:"jumanji",
        year:2021,
        rating:4.5
    }
    console.log(movie.title);

    //add 
    const genre="action"
    const movie1={...movie,genre}

    console.log(movie1);

    


    //change rating
     movie.rating=3
     //
     movie.rating
     console.log(movie.rating);

     //
     console.log(movie1["rating"]);


    console.log(movie);
    console.log(Object.keys(user));

    Object.keys(user).forEach(
        (value)=> {console.log(user[value])}
        )
    
    console.log(Object.entries(user));

    //
    Object.entries(user).forEach(
        ([_,value])=>{console.log(value);}
    )

    const user1 ={
        name:"aime",
        adress:{
            city:"boston"
        }
    }
    const copy={...user1}
    copy.adress.city="NY"
    console.log(user1.adress.city);
    console.log(copy.adress.city);
     //deep copy 
       const user2={
        name:"aime",
        adress:{
            city:"boston"
        }
    }

    const deepCopy =structuredClone(user2)

    deepCopy.adress.city="New York"

    console.log(user2.adress.city);
    console.log(deepCopy.adress.city);

    



}
objectRun()