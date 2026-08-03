class Person {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (value.includes("@")) {
            this.#email = value;
        } else {
            console.log("Invalid Email");
        }
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        if (value > 0) {
            this.#id = value;
        } else {
            console.log("Invalid ID");
        }
    }

    describeRole() {
        console.log("I am a person in the school.");
    }
}


class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(`${member.name} added successfully.`);
    }

    removeMember(id) {
        this.members = this.members.filter(member => member.id !== id);
        console.log("Member removed.");
    }

    listMembers() {
        console.log("School Members:");

        this.members.forEach(member => {
            console.log(`${member.name}`);
        });
    }

    describeRole() {
        console.log("I am the Principal. I manage the school.");
    }
}


class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.grades = [];
    }

    gradeStudent(studentName, grade) {
        this.grades.push({
            studentName,
            grade
        });

        console.log(`${studentName} graded successfully.`);
    }

    listGrades() {
        console.log("Students Grades:");

        this.grades.forEach(student => {
            console.log(`${student.studentName}: ${student.grade}`);
        });
    }

    describeRole() {
        console.log(`I teach ${this.subject}.`);
    }
}


class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.subjects = [];
    }

    enroll(subject) {
        this.subjects.push(subject);
        console.log(`${this.name} enrolled in ${subject}`);
    }

    viewSubjects() {
        console.log(`${this.name}'s Subjects:`);

        this.subjects.forEach(subject => {
            console.log(subject);
        });
    }

    describeRole() {
        console.log("I am a student.");
    }
}


const principal = new Principal(
    "Ahmed",
    "ahmed@school.com",
    1
);

const teacher = new Teacher(
    "Sara",
    "sara@school.com",
    2,
    "JavaScript"
);

const student = new Student(
    "Ali",
    "ali@school.com",
    3
);


principal.addMember(teacher);
principal.addMember(student);

principal.listMembers();


teacher.gradeStudent("Ali", 95);
teacher.gradeStudent("Omar", 88);

teacher.listGrades();

student.enroll("JavaScript");
student.enroll("HTML");
student.enroll("CSS");

student.viewSubjects();


const members = [
    principal,
    teacher,
    student
];


for (let member of members) {
    member.describeRole();
}