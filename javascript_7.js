// In this code we learn about console methods 
// Use code in the console tab using the inspect method in web browser
// show error 
console.error('Hi you are facing error in javascript course')
// use condtions 
console.assert(44<33)// give assertion failed 
// show the key value pair in table form 
let obj={1:'Mukul', 2: 'Harshit', 3:'Sumit'}
console.table(obj)
// for warning 
console.warn("Hey don't open porn websites")
// how to check time between first and second command 
console.time('forloop')
console.timeEnd('forloop')

// alert confirm
alert("Enter the Your Age")
let choice=prompt("Enter Only if You above 18")
if (choice>18){
    document.write(choice)
}
else{
    alert("You are not above 18")
}
confirm("You are above 18")