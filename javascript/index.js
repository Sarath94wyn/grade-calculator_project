function gradeCalc() {
  let english = Number(prompt("enter your english mark"))
  let hindi = Number(prompt("enter your hindi mark"))
  let science = Number(prompt("enter your science mark"))
  let maths = Number(prompt("enter your science mark"))
  let social = Number(prompt("enter your social mark"))

  let totalMarks = english + hindi + science + maths + social
  let average = totalMarks / 2

  let grade = "";
  if (average >= 90) {
    grade = "A+"
  } else if (average >= 80) {
    grade = "A"
  } else if (average >= 70) {
    grade = "B"
  } else if (average >= 60) {
    grade = "C"
  } else if (average >= 50) {
    grade = "D"
  } else {
    grade = "F"
  }


  alert("Total Marks = " + totalMarks + "\n" + "Average Marks = " + average + "\n" + "Your Grade is " + "" + grade)
}