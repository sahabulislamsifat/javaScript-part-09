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

// function calculate(num1, num2, callback) {
//   let sum = num1 + num2;
//   if (callback) callback(sum);
//   return sum;
// }

// calculate(5, 5, function (result) {
//   console.log(result);
// });

// part 2
// console.log("Code line 01");
// console.log("Code line 02");
// console.log("Code line 03");

// function hello() {
//   console.log("Code line 02");
// }
// console.log("Code line 01");
// hello();
// console.log("Code line 03");

// console.log("line One");

// setTimeout(function () {
//   console.log("line two");
// }, 2000);

// console.log("line three");

// console.log("line One");

// setInterval(function () {
//   console.log("line two");
// }, 2000);

// console.log("line three");

///

const paymentSuccess = true;
// const marks = 70;
const marks = 85;

function enroll(callback) {
  console.log("Course enrollment is in process....");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed!");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course on progress...");

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough marks to get the certificate!");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing your certificate!");

  setTimeout(function () {
    console.log("Hurrah! your got the certificate!....");
  }, 1000);
}

// enroll();
// progress();
// getCertificate();

enroll(function () {
  progress(getCertificate);
});
