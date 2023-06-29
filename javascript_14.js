// Introduction to Object Oriented Programming
let obj={
    name:"Mukul",
    language:"Javascripth"
}
let p={
    run:()=>{
        alert('Running')
    }
}
obj.__proto__=p
obj.run()
// Now lets learn about the object and class 
class employee{
    constructor(givenname,role){
        console.log("I am constructor")
        this.name=givenname
        this.role=role
    }
    submit(){
        alert("The form is submitted!")
    }
    cancel(){
        alert(this.name+"The form is cancelled.")
    }
    
}
let mukul=new employee('mukul','Data Scientist')

let sumit=new employee('sumit','Full Stack Developer')
mukul.submit()
sumit.submit()
sumit.cancel()
// Inheritance
class workers extends employee{
    callthem(){
        alert('Calling Workers')
    }
    submit(){
        super.submit()// ye hmne parent class wale submit function ko call kar llya
    }

}
let w=workers('Sammer','worker')
w.callthem()
// Static methods 
class animals{
    constructor(name){
        this.name=animals.capatalize(name)
    }
    walking(){
        console.log("The animal "+this.name+"is walking..")
    }
    static capatalize(name){
        return name.charAt(0).toUpperCase()+name.substr, name.length
    }
}
let a =animals("jack")
a.walking()
//console.log(capatalize('pig')) it give error because we can only access function in class not variables 