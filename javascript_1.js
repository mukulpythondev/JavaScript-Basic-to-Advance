console.log("hello World")
// how to declare variable 
let a=100 // a containes 100


b='Adarsh'
console.log(b)
// now let see what is differnce between the var and let
{
    let a=200
    console.log(a)// print 200
}
console.log(a) // print 100 it means the variable declared in the block is different from inside block
// use of const to devlare the identifier which value can not changed
const author='Mukul Rana'
// There are seven types of fundamental data type 
// NN -BB-SS-U
let m=null
let u=34;
let k =true;
let l=BigInt("500")
let r='HI'
let s=Symbol("i am javascript beginner ")
let n=undefined // let n [this is also in category of undefind]
console.log(m,u,k,l,r,s,n)
// how to check the type of varaible
console.log(typeof m)
// Now lets see about the objects 
const item={
    'Mukul':true,
    'Sumit': false,
    'Uditya': 'friend',
    'marks': 500
}
// how to get the value of keys
console.log(item['marks'])
// how to add new keys to object
item['Vaibhav']='School Friend'
console.log(item)