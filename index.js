function getStudentGrade() {
    let marks = parseInt(prompt("Enter student marks (0-100): "));
    
    if (marks >= 80 && marks <= 100) {
        console.log("Grade: A");
    } else if (marks >= 60 && marks < 80) {
        console.log("Grade: B");
    } else if (marks >= 49 && marks < 60) {
        console.log("Grade: C");
    } else if (marks >= 40 && marks < 49) {
        console.log("Grade: D");
    } else if (marks < 40 && marks >= 0) {
        console.log("Grade: E");
    } else {
        console.log("Invalid input. Please enter marks between 0 and 100.");
    }
}

getStudentGrade();
