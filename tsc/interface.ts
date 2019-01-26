interface Iperson{
    firstName:string,
    lastName:string,
    sayHi:()=>string
}
var customer:Iperson={
    firstName:'tom',
    lastName:'hanks',
    sayHi:()=>{return 'hi there'}
}
console.log("customer对象")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi)

var employeee:Iperson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
} 
 
console.log("Employee  对象 ") 
console.log(employeee.firstName) 
console.log(employeee.lastName)



interface Person{
    age:number
}

interface Musician extends Person{
    instrument:string
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument="Drums";
