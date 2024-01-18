const studentInfo = {
    name: 'John',
    age: 18,
    grade: 'B'
}

function updateGrade(newGrade){
    studentInfo.grade = newGrade;
    console.log(studentInfo);
}

updateGrade('A');
