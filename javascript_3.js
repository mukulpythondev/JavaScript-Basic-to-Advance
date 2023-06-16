// In this code we learn about loops
// For Loops  
for (let i =0;i<50;i++){
    console.log(i)
}
// using for in 
let obj={
    Mukul:55,
    Harshit:60,
    Sumit:56
}
for (let a in obj){
    console.log("The marks of "+ a + ' is '+ obj[a])
}
// Now explore the while loops 
let n =12
let k=0;
while (k<n){
    console.log(k)
    k++;

}
let z=5
let x=10;
do{
    console.log(x)
    x++;

}while (x<z)
// condition false thi lekin 10 print ho gya!
// Now learn about Functions 

// create the function that gives the average of two numbers 
let v=34
let h=64
function avg(a,b){
    return (a+b)/2
}
console.log("The average of "+v+" and "+h +" is ",avg(v,h))
