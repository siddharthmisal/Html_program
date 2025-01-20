class Employee{
    constructor(){
        this.id=100;
        this.empName="Sam";
    }
    displayInfo(){
        console.log(this.id+" "+this.empName)
    }
}
let emp=new Employee();
emp.displayInfo();