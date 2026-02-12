

export function arrayRun(){
    const movies = ["jumanji","avatar","batman"]

    console.log(movies);
    console.log(movies[0]);
    console.log(movies.push("matrix"));


    const movies1 =[
        {
            title:"jumanji",
            rating:4,
            year:2024
        },
        {
            title:"avatar",
            rating:3,
            year:2020
        },
        {
            title:"batman",
            rating:5,
            year:2024,

        },
    ]

    console.log("second movie",movies1[1].title);

    //
    console.log("rating",movies1[0].rating=2);

    //
    const deepCopy =structuredClone(movies1)
    deepCopy.push({
        title:"aime",
        rating:5,
        year:2025

    });
    console.log(deepCopy);

    //
    const allMovieTitle =movies1.forEach((movie)=>console.log(movie.title))
    

    // 
    const onlyRating=movies1.map((movie)=>
        movie.rating
    
    )
    console.log("rating",onlyRating);

    //
    const titleUperCase = movies1.map((movie)=>{
        return movie.title.toUpperCase()
    })
    console.log("titleUperCase",titleUperCase);

    //
    const recentMovie=movies1.filter((movie)=>
        movie.year > 2021
    )
    console.log("recent",recentMovie);

    const rating1 =movies1.filter((movie)=>
        movie.rating >=4
    )
    console.log("rating",rating1);

    //reduce 
    

    

   
   


    

}
arrayRun()