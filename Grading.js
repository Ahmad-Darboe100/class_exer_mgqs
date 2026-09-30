function grade(pass) {
  if (pass >= 90 && pass <= 100) {
    return "A";
  } else if (pass >= 70 && pass <= 89) {
    return "B";
  } else if (pass >= 55 && pass <= 69) {
    return "C";
  } else if (pass >= 45 && pass <= 54) {
    return "D";
  } else {
    return "F";
  }
}

console.log(grade(90));