// error handling 
setTimeout(() => {
    console.log("Hacking Wifi Please wait...")
}, 2000);
try{
    console.log(sourav)// give error and stops the code
}
catch(error){
    console.log(error)// handeling error
}
setTimeout(() => {
    console.log("Fetching Username and Password Please Wait ")
}, 2000);
setTimeout(() => {
    console.log("Wifi Found- Sourav and attacking please Wait!")
}, 2000);
setTimeout(() => {
    console.log("Successfully connected to Wifi.")
}, 2000);
// error object
try {
    let age= prompt("Enter your age")
    age=Number.parseInt(age)
    if (age>150){
  throw new ReferenceError("Mukul is not learning well")} 
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
// finally = it is run unless try or catch run or not
try {
    console.log(program)
    console.log('The program is running')
} catch (error) {
    console.log("There is an error in program")
}
finally{
    console.log("the program is ended")
}