// console.log("1");

// function asyncFunction1() {
//   console.log("4");

//   new Promise((resolve) => setTimeout(resolve, 1000));

//   console.log("6");
// }

// function syncFunction1() {
//   console.log("2");
//   console.log("3");
// }

// function asyncFunction2() {
//   console.log("5");

//   new Promise((resolve) => setTimeout(resolve, 500));

//   console.log("7");
// }

// console.log("8");

// syncFunction1();

// (() => {
//   console.log("9");

//   asyncFunction1();

//   syncFunction1();

//   asyncFunction2();

//   console.log("10");
// })();

// console.log("11");

// function* generatorFunction() {
//   console.log("12");

//   yield new Promise((resolve) => setTimeout(() => resolve(), 300));

//   console.log("13");
// }

// const generator = generatorFunction();
// generator.next().value.then(() => {
//   console.log("14");
// });

// setTimeout(() => {
//   console.log("15");
// }, 200);

// console.log("16");
// function* generatorFunction() {
//   console.log("12");

//   yield new Promise((resolve) => setTimeout(() => resolve("1"), 300));
// }

// const generator = generatorFunction();
// generator.next().value.then(() => {
//   console.log("14");
// });

// 1 - 8 - 2 - 3 - 9 - 4 - 6 - 2 - 3 - 5 - 7 - 10 - 11 - 12 - 16 - 14 - 15
