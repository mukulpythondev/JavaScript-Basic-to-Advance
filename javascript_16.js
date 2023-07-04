// Now learn about the spread operator
let arr=[3,5,6,2,43,32]
let [a,b,...rest]=arr
console.log(a,b,rest)// it print the arr a, b and [rest elements]
// spread operator 
let are=[34,88,32,23]
let obj={...are}// Index number is the keys and list item are values
console.log(obj)
let obj2={
    name:"Mukul",
    company:'WebDevta',
    country:'India'
}
console.log({...obj2, name:'Sumit'})
// concept of hoisting - when function or variable is called first then it declared
greet()
function greet(){
    console.log("Good Morning")
}

console.log(char)
var char;// it give undefined
// let char; it give error
var char='hi'
//welcome() it give the error
var  welcome=function(){
console.log("Welcome My Friend")
}

// lets understand about the closures
let message='The global'
function hello() {
    message='hello'
    console.log("The insider",message)
}
hello()
// use of arrow function
const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function() {
      // let that = this
      // console.log(this)
      setTimeout(() => {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
  sayHello("Harry", "Good Afternoon")
  // console.log(x.name, x.exp)
  // x.show()
    // importing the function from other file
    const hello1=require("./javascript_17")
    hello1()

  // Regular Expressions 
  const regex=/MERN/g
  const content='Mukul Rana is becoming the MERN Stack developer.'
content.repeat(regex,'Full')
console.log(content)
