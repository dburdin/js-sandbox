// function async1() {
//   console.log("1");
//   async2().then(() => {
//     console.log("2"); // micro
//   });
// }

// function async2() {
//   return new Promise((resolve) => {
//     resolve();
//     console.log("3");
//   });
// }

// function* generate() {
//   console.log("4");
//   yield;
//   console.log("5");
// }

// function* generate2() {
//   console.log("6");
//   yield;
//   console.log("7");
// }

// console.log("8");

// setTimeout(function () {
//   // macro
//   console.log("9");
// }, 0);

// const generator1 = generate();
// generator1.next();
// generator1.next();

// async1();

// new Promise(function (resolve) {
//   console.log("10");
//   resolve();
// }).then(function () {
//   console.log("11"); // micro
// });

// console.log("12");
// const generator2 = generate2();
// generator2.next();
// generator2.next();

// 8 - 4 - 5 - 1 - 3 - 10 - 12 - 6 - 7 - 2 - 11 - 9

// 1.2 Розібатись як працює EventLoop, та якими засобами можно керувати чергами. Розібратись як змінювати порядок в черзі мікро тасків та макро тасків

// Деякі приклади
// process.nextTick, setImmediate, queueMicrotask
