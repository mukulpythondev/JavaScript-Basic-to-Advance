// Fetch API
let p=fetch('https://goweather.herokuapp.com/weather/new')
p.then((Value1)=>{
    console.log(response.status)
    console.log(response.ok)
return Value1.json()
}).then((value2)=>{
console.log(value2)
})
// post request concept
let options={
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
}
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json)); 
  // Lets Learn about cookies 
console.log(document.cookie)
document.cookie='name:Mukul'// it add the new cookie without deleting previous one
console.log(document.cookie)
let key=prompt("Enter Your Cookie key:")
let value=prompt("Enter Your Cookie Value:")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
//document.encodeURIComponent('unicode that generated')
// Learn About the Local storage
let k=prompt("Enter your key")
let v=prompt("Enter your value")
localStorage.setItem(k,v)
console.log(localStorage.getItem(k))
if (k==0){
  localStorage.removeItem(k)
}
if (k==1){
  localStorage.clear()
}
// Session Storage - it only work for single tabs 
sessionStorage.setItem('Name','Mukul')

