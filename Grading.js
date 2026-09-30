function grade(pass) {
  if (pass >= 90) {
    return "A";
  } else if (pass >= 75 && pass < 90) {
    return "B";
  } else if (pass >= 55 && pass < 75) {
    return "C";
  } else if (pass >= 45 && pass < 55) {
    return "D";
  } else {
    return "F";
  }
}

console.log(grade(90));