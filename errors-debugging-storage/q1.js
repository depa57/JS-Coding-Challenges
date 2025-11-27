function validateAge(age) {
  if (age < 0) throw new Error('InvalidAgeError: age must be >= 0');
  return true;
}
console.log(validateAge(24));