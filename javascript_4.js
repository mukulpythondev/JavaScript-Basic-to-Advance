// In this  code we learn about strings 
// declaring a string 
let name="Mukul"
console.log(name.length) // printing the length of the string
console.log(name[0])// accesing the index element
let boy1="Harshit"
let boy2="Uditya"
console.log(`${boy1} is friend of ${boy2}`)//back ticks use kare h ( `` )
// how to use variable in the string
// Important the symbol used to show string is the button left of the 1 number in keyboard.

// escape sequence charater use 
let mg='bana\'na' // printed bana na 
console.log(mg)

// String Methods 
let strs='Strings'
console.log(strs.toUpperCase())// to upper all characters
console.log(strs.toLowerCase())// make the all character lower
// Slicing
console.log(strs.slice(2,5))
console.log(strs.replace("ing","ong"))// first is string that is replaced and second place string is now updated in string
let ints='integers '
console.log(strs.concat(ints))

let friend2='     Vaibhav     '
console.log(friend2.trim())// it removes the extra spaces in the string