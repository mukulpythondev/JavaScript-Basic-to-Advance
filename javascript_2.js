 // IN this code we learn about the expressions and condition
 // Fistly start with the basic operators 
 let a =59
 let b= 4
 console.log('The value of a+b' ,a+b) 
 console.log('The value of a-b' ,a-b) 
 console.log('The value of a*b' ,a*b) 
 console.log('The value of a/b' ,a/b) 
 console.log('The value of a**b' ,a**b) 
 console.log('The value of a%b' ,a%b) 
 console.log('The value of ++a' ,++a) // it increment the value of by 1 
 // learn about  assignment operators 
 c=59
 c+=6 // it is same as c=c+6
 console.log(c)
//comparison operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)
// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true);

// Now learn about Conditions 
let p = prompt("Hey What is Your Age ?")// it give error in node js but in web browser it is  working properly
p= Number.parseInt(p)// this is type casting to convert p tnto strings 
if (p>0){
    alert("It is a valid age ");
}
else if (p<9) {
    alert("You are a kid and you can not drive.")
}
else if (p<0){
    alert("It is a invalid age ")
}
else{
    alert("This given age is not valid");
}
console.log('You Can', (p<18? 'not drive': 'drive'))

// now lets learn about the switch conditions
let age=prompt("What is your age")
switch(age){
    case 12:
        log.console("Your age is 12")
    case 13:
        log.console("Your age is 13")
}
