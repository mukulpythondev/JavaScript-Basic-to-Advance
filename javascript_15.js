// Now lets learn about getters and setters
class car{
    constructor(name){
        this._name=name
    }
    driving(){
        alert("I am driving.")
    }

   get name(){
        return this._name
    }
    set name(newname){
        this._name=newname
    }
}
let gadi=new car('Mahindra Thar 4x4')
gadi.driving()
console.log(gadi.name)
gadi.name='Range Rover'
console.log(gadi instanceof car)

// Using Class concept complex number 
class complexnumber{
    constructor(real, imaginary){
        this.real=real
        this.imaginary=imaginary
    }
    add(num){
        real=this.real+num.real
        imaginary=this.imaginary+num.imaginary
    }
}
let number=new complexnumber(5,3)
number.add(33)
// IIFE  - Immediately Invoked Function Expressions
let p = ()=>{return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(33)
    },3000);
})}
(async ()=>{
    let start1=await p()
    console.log(start1)
    let start2=await p()
    console.log(start2)
    let start3=await p()
    console.log(start3)
})()