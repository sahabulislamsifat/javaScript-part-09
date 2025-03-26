// function display(some) {
//   console.log(some);
// }

// function calculate(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// const result = calculate(5, 5);
// display(result);

// function display(some) {
//   console.log(some);
// }

// function calculate(num1, num2) {
//   let sum = num1 + num2;
//   display(sum);
// }

// calculate(5, 5);

// function display(some) {
//   console.log(some);
// }

// function calculate(num1, num2, callback) {
//   let sum = num1 + num2;
//   if (callback) callback(sum);
//   return sum;
// }

// const result = calculate(5, 5, display);

function calculate(num1, num2, callback) {
  let sum = num1 + num2;
  if (callback) callback(sum);
  return sum;
}

calculate(5, 5, function (result) {
  console.log(result);
});
