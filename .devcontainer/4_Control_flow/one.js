const temperature = 40;

if (temperature <= 25){
    const weather = "Cold.";
    console.log(`Climate is ${weather}`);    
}else{
    weather = "hot";
    console.log(`Climate is ${weather}`);   
}

const isUserLoggedIn = true;
const debitCard =true;

if (isUserLoggedIn && debitCard){
    console.log("Allowed to access.");   
}

