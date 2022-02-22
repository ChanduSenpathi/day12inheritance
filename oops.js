// Inheritance basic
// eg.1:-

class A 
{
   abc(){
     return "sumit";
   }
}
class B extends A 
{
    bca(){
      let pname=super.abc();
      let cname="amit";
      console.log(`${pname} and ${cname} are best friends`);
    }
}
let obj=new B;
obj.bca();



// Inheritance eg.2:-

class Person 
{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    getFullName(){
        return `the username is ${this.fname} ${this.lname}`
    }
}
class Employee extends Person
{
    constructor(fname,lname){
      super(fname,lname)
    }
}
let obj=new Employee('Chandu','Senapathi');
console.log(obj.getFullName());

// computed

let name="username";
class Person {
  constructor(fname,lname){
    this.fname=fname;
    this.lname=lname;
  }
  get[name](){
    return `${this.fname} ${this.lname}`
  }
}
let person=new Person('Chandu','Senapathi');
console.log(person.username);

// for of loop basic

let courses=["HTML","CSS","JS","REACT JS","PYTHON"];
for(let each of courses){
    console.log(each);
}

// Iterator eg.1:-

let courses=["HTML","CSS","JS","REACT JS","PYTHON"];
const it=courses[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// eg.2:-

class Neosoft 
{
    constructor(start=0,end=Infinity,interval=1){
         this.start=start;
         this.end=end;
         this.interval=interval
    }
    [Symbol.iterator](){
        let counter=0;
        let nextIndex=this.start;
        return {
            next:()=>{
                if(nextIndex <=this.end)
                {
                    let result={value:nextIndex,done:false};
                    nextIndex+=this.interval;
                    counter++;
                    return result;
                }
                return {value:counter,done:true}
            }
        }
    }
}