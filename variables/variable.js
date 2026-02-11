


export function runVariables(){
    let score =20
    const appName="janu"

    const user={name:"mbabazi"}

    user.name="aime"

    const newUser ={...user,name:"janu"}

    console.log(score)
    console.log(appName)
    console.log(user);
    console.log(newUser);


    

    
}
runVariables()

export function testvar(){
    if (true){

      var x=10;
     //let y=20; //let does not support block
     //const z=30 // it can not suppport block 
    }
    
    console.log(x);
    //console.log(y); 
    //console.log(z);

    const user2={
        name:"mbabazi",
        adress:{
            city:"boston"
        }
    }

    const newUser={...user2}

    newUser.adress.city="NY"

    console.log(user2.adress.city);
    console.log(user2);




}
testvar()