class Worker {
    constructor (firstName, lastName, salary, yearOfStart) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.yearOfStart = yearOfStart;
    }
    calculatePrize() {
        return 0.25 * this.salary;
    }
    getExperience() {
        return new Date().getFullYear() - this.yearOfStart;
    }
}

class Developer extends Worker {
    constructor(firstName, lastName, salary, yearOfStart, discipline) {
        super(firstName, lastName, salary, yearOfStart);
        this.discipline = discipline;
    }
}

class ProjectManager extends Worker {
    constructor(firstName, lastName, salary, yearOfStart, projectToManage) {
        super(firstName, lastName, salary, yearOfStart);
        this.projectToManage = projectToManage;
    }
}

let denis = new Developer('Denis', 'Ivanov', 99999, 2015, 'UI');
let alexei = new ProjectManager('Alexei', 'Petrov', 111111, 1999, ['First Project', 'Second Project', 'Third Project']);
console.log(alexei.calculatePrize());
console.log(denis.getExperience());
console.log(denis, alexei);