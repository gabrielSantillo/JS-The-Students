let students = [
    {
        name: `Gabriel`,
        gpa: 4.0,
        current_courses: [`math`, `programming`, `logic`]
    },
    {
        name: `Alex`,
        gpa: 3.0,
        current_courses: [`math`, `history`, `speech`,`biology`]
    },
    {
        name: `Colleen`,
        gpa: 2.0,
        current_courses: [`speech`, `math`, `history`]
    },
    {
        name: `Josh`,
        gpa: 3.0,
        current_courses: [`biology`, `programming`, `logic`]
    },
    {
        name: `Nadine`,
        gpa: 1.7,
        current_courses: [`history`, `math`, `logic`]
    }
]

let counter = 0;
while(counter < students.length) {
    console.log(`The student ${students[counter][`name`]} has as first course: ${students[counter][`current_courses`][0]}`);
    counter++;
}

for(let counter = 0; counter < students.length; counter++) {
    let last_course = students[counter][`current_courses`].at(-1);
    console.log(`The student ${students[counter][`name`]} has as last course: ${last_course}`);
}

/*This is the 2.6 step
Write a function that accepts 1 arguement (a student object) that 
will return the number of current_courses a student is enrolled in*/ 
function coursesEnrroled(array) {
    let number_of_courses = 0;
    for(let counter = 0; counter < array.length; counter++){
       return number_of_courses = array.length;
    }
}
coursesEnrroled(students[1][`current_courses`]);

/*This is the 2.7 step
Write a while loop that will call this function for each student*/


let another_counter = 0;
while(another_counter < students.length) {
    console.log(`The student ${students[countanother_counterer][`name`]} is currently enrolled in: ${coursesEnrroled(students[another_counter][`current_courses`])}.`)
    another_counter++;
}

/*This is the 2.8 step
Write a function that accepts 1 arguement (an array of student 
objects) that will return the total number of classes all students 
are enrolled in */

function numberOfClasses(arrayStudents) {
    let total_classes_students = 0;
    for(let counter = 0; counter < arrayStudents.length; counter++) {
        total_classes_students = total_classes_students + arrayStudents[counter][`current_courses`].length;
    }
    return total_classes_students;
}

numberOfClasses(students);

/*This is the 2.9 step
Write a function that accepts 1 arguement (an array of student 
objects) that will return the number of students taking the "Math" 
course */
function numberOfClassesMath(arrayStudents) {
    let does_include = 0;
    let students_taking_math = 0; 
    for(let counter = 0; counter < arrayStudents.length; counter++) {
        does_include = arrayStudents[counter][`current_courses`].includes("math");
        if(does_include) {
            students_taking_math++;
        }
    }
    return students_taking_math;
}

let students_taking_math = numberOfClassesMath(students);
console.log(`In total we have ${students_taking_math} students taking math classes.`)