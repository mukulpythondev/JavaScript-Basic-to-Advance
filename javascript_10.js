// Synchronise Example
let a=prompt("What is your Name?")
let b=prompt("What is your age?")
let c=prompt("What is your class")
console.log(a+"is"+b+'year old'+'and class is'+c)
// Asynchronise Example
console.log('Start')
setTimeout(() => {
    console.log("hey i am good");
}, 3000);
console.log("end")
// callbacks -- we pass the function in function usually we give argument it is string or other datatype not function
function loadscript(url,callbacks){
    let script=document.createElement('script')
    script.onload=function(){
    console.log("loaded script with url",url)
    callbacks()}
    script.onerror=function(){
        console.log("Error loading with URL"+url)
        callbacks(new Error("Url have some error"))
    }
    document.appendChild(script);
   
}
function hello(){
    console.log("hello How are you")
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",hello)

// promises = they are used to excute parallel the process so the below code not delay or wait for upper code
let promise=new Promise(function(resolve, reject){
    alert("I am promise in alert")
    resolve(99)
})
console.log(promise)

let p=new Promise(function(resolve,reject){
    console.log("Process Pending")
    setTimeout(() => {
        // console.log('I am a promise and i am fullfilled.')
    }, 3000);
    resolve(true)
})
console.log(p)
let p2=new Promise(function(resolve,reject){
    console.log("Process Pending")
    setTimeout(() => {
        // console.log('I am a promise and i am Rejected.')
    }, 3000);
    reject(new Error("I am an error"))
})
// use of .then method
// to get the value
p.then((value)=>{
    console.log(value)
})
// to catch the errors
p2.catch( (value)=>{
    console.error("Some error occured")
})

let p3=new Promise(function(resolve,reject){
    console.log("Process Pending")
    setTimeout(() => {
         console.log('Resolved after 3 Seconds')
         resolve(49)
    }, 3000);
    
})
p3.then((value)=>{
    console.log(value)
    let p4=new Promise(function(resolve,reject){
        setTimeout(() => {
         
         resolve(' Resolve Promise2')
    }, 3000);
    })
}).then((value)=>{
    console.log("done")
})
// loadscript function using promises
function loadscript2(url){
    return new Promise((resolve,reject)=>{
    let script=document.createElement('script')
    script.type='text/javascript'
    script.url=url
    document.body.appendChild(script);
    script.onload=()=>{
        resolve(1)
    }
    script.onerror=()=>{
        reject(error(0))
    }
}
)}
let loader=loadscript2("https://google.com")
loader.then((value)=>{
    console.log(value)
})