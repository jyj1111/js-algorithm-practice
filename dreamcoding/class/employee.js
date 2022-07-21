class Employee {
  constructor(name, part, worktime) {
    this.name = name;
    this.part = part;
    this.worktime = worktime;
  }
  pay() {
    return this.worktime * 10000;
  }
}

class PartEmployee extends Employee {
  pay() {
    return super.pay() * 0.8;
  }
}

const employee = new Employee("yj", "fe", 160);
const intern = new PartEmployee("jj", "fe", 100);
console.log(employee.pay());
console.log(intern.pay());
