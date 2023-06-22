// in this code we learn about bom and dom
console.log(window)
console.log(document)// dom represent the page of html

// how to get specific element with the help of class in console
document.getElementsByClassName('cursor pointer')[3].style.color='red'
// Dom collections
// concept of parent and children tag
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
// parent and sibling methods 
let a=document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)
// using in Tables methods  
let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows[1].rowIndex)
// using attribute methods 
// id name ='first' and class name ='hey ' this code in html file
let first=document.getElementById("first")
let divi=first.getAttribute('class')// print hey 
console.log(first.hasAttribute('style'))
console.log(first.dataset.game)
// adding element
let elem=document.getElementsByTagName('div'[0].innerHTML='<h1> Hello World</h1>;')

let adee=document.createElement('div')
adee.innerHTML='<h1> Hello World</h1>;'