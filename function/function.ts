const addTwo = (val:number) =>{
  return val+2;
}

const getUpper = (val:string)=>{
  return val.toUpperCase;
}

const signUpUser = (name:string,email:string,isPaid:boolean) =>{

}

const loginUser = (name:string,email:string, isPaid:boolean = false)=>{

}

// suppose we are doing returning data of diffrent types so we are not getting error but we wil get error let see an example
const cheat = (value:number) => {
  return "hello"
}
// in above code we are returning string but we shuld return number so we can handel this by giving retrun type a well let se
const noCheat = (val:number):number =>{
  return 2;
}

addTwo(5);
getUpper("Abhay")
signUpUser("Abhay","email.com",false);
loginUser("Abhay","email");