//complete this code
class Person {
	constructor(name,age){
    this.n=name
    this.a=age
  }
  
  get name(){
    return this.n
  }
  
  set age(age){
    this.a=age
  }
}

class Student extends Person {
	study(){
    console.log(this.name+" is studying")
  }
}

class Teacher extends Person {
	teach(){
    console.log(this.name+" is teaching")
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
