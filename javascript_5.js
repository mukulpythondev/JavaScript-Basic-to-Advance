// In this code we learn about Arrays 
let marks=[34,64,63,94,43,'not present']
console.log(marks)
// How to acces the element with the indexes
console.log(marks[0])
console.log(marks[1])
//how  to calculate length of Arrays 
console.log('The length of the marks array is ',marks.length)  
// updating the value in the arrays 
marks[5]=33
console.log(marks)

// list methods 
console.log(marks.toString())// print value as string
//pop method 
marks.pop()// deletes the last element
// push method 
marks.push(45)// 45 added in the marks array
// to remove the first element 
marks.shift()
// to add element at start of array
marks.unshift(34)
// all the above elements change the array of length 
// delete method is not change the length of array
delete marks[0]
let marks2=[53,64.54,66,34]
// how to add new array using two merge array 
let newmarks=marks.concat(marks2)
console.log(newmarks)
// to sort the array and it modify the array and sort accordingly number starting digit just like 123,233,90

console.log(marks.sort())
// splice method first take the index and after all the number are entered and old element are removed
console.log(marks.splice(2,54,64,34))
// slice method get the index of range and create the new array 
console.log(marks.slice(1 ,5))
// Loops using in the Arrays 
for (let i in marks){
    console.log(marks[i])
}
for (let g=0; g<marks.length;g++){
    console.log(marks[g])
}
// for each function function help to convert data into arrays 
marks.forEach((element) => {
    console.log(element * element);
});
 // for of 
 for (let m of newmarks){
    console.log(m)
 }

 // modern methods 
 // map and it creates the new array
 let newa=marks.map((value , index, array)=>{
    console.log(value , index, array)
    return value+1
 })
 // Filter method to get with specific condtions 
 let arr=[33,53,6,64,22,77,9]
 let arr2=arr.filter((a)=>{
    return a<10
 })
 console.log(arr2)

 // Reduce Method 
 let grr=[3,23,64,3,75,93]
 let grr2=grr.reduce((h1,h2)=>{
    return h1+h2
 })
 console.log(grr2)