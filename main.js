// //                   // Assignment 1: Building Your Friend List
var student = [
    { name: "sana", isSeniorStudent: true, hasCompletedAssignment: true, },
    { name: "uzma", isSeniorStudent: false, hasCompletedAssignment: true, },
    { name: "atiqa", isSeniorStudent: true, hasCompletedAssignment: false, },
    { name: "javeria", isSeniorStudent: false, hasCompletedAssignment: true, },
    { name: "aina", isSeniorStudent: true, hasCompletedAssignment: false, },
];
function findSeniorStudentwithdoneAssignment(students) {
    return students.filter(function (student) { return student.isSeniorStudent && student.hasCompletedAssignment; });
}
;
console.log("This is a list of Students");
console.log(student);
console.log("This is a list of those students who has done Assignment");
var SeniorStudentwithAssignment = findSeniorStudentwithdoneAssignment(student);
console.log(SeniorStudentwithAssignment);
function removedstudentnotdoneAssignment(studet) {
    return student.filter(function (student) { return student.isSeniorStudent && !student.hasCompletedAssignment; });
}
;
var updatedStudentsList = removedstudentnotdoneAssignment(student);
console.log(updatedStudentsList);
