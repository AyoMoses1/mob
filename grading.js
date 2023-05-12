function gradingStudents(grades) {
  // Write your code here
  let answer = []
  grades.forEach(grade => {
      if(grade < 38){
          answer.push(grade)
      }
      else{
           const closestMultiple = Math.round(grade/5) * 5
      const result = Math.abs(closestMultiple - grade) < 3 && grade < closestMultiple ? closestMultiple: grade
      answer.push(result)
      }
     
  })
  return answer
}