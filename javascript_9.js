// concept of classname and class 
// first is the class given to element in the html file for div
first.className='text-black red'// here we changed the class that was written in html file 
first.classList.remove('red')// classlist give all the classes applied to element
first.classList.add('black')
first.classList.toggle('blue')// if class exist so removed and if not it apply it 
first.classList.contains('green ')// it give true of false
// now learn about set timeout 
alert("Hi")
let delay=setTimeout(function(){
    alert("I am inside set time out!")
}
,2000)// it is millisecond
console.log(delay)
clearTimeout(delay)
// now see how to use in the function
const summer=(a,b)=>{
    console.log("Yes I am Calculating",(a+b))
    a+b 
}
setTimeout(summer,2000,45,64)// second place to time delay 1000 milisecond =1 second so it is only 2sec and third , fourth argrments are for function
// set interval is differ it is running again and again 

let a = setTimeout(function() {
       alert("I am inside of settimeout")
     }, 5000)

clearInterval(a)
// Now see about the events in the javascript
let even=document.getElementsByClassName('container')[0]
even.onclick=()=>{
    let eve=document.getElementsByClassName('container')[0]
    eve.innerHTML='hello programmers'
}