const Worker = function(firstName, lastName, salary, yearOfStart) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.yearOfStart = yearOfStart;
}

Worker.prototype.calculatePrize = function() {
    return 0.25 * this.salary;
}
Worker.prototype.getExperience = function() {
    return new Date().getFullYear() - this.yearOfStart;
}

const Developer = function(firstName, lastName, salary, yearOfStart, discipline) {
    Worker.call(this, firstName, lastName, salary, yearOfStart);
    this.discipline = discipline;
}

Object.setPrototypeOf(Developer.prototype, Worker.prototype);

const denis = new Developer('Denis', 'Ivanov', 99999, 2015, 'UI');

const ProjectManager = function(firstName, lastName, salary, yearOfStart, projectToManage) {
    Worker.call(this, firstName, lastName, salary, yearOfStart);
    this.projectToManage = projectToManage;
}

Object.setPrototypeOf(ProjectManager.prototype, Worker.prototype);

const alexei = new ProjectManager('Alexei', 'Petrov', 111111, 1999, ['First Project', 'Second Project', 'Third Project']);
console.log(denis, alexei);
console.log(denis.getExperience(), alexei.getExperience());
console.log(alexei.calculatePrize());