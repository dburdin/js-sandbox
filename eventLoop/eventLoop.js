// function async1() {
//   console.log("async1 start");
//   async2().then(function async1End() {
//     console.log("async1 end");
//   });
// }

// function async2() {
//   return new Promise((resolve) => {
//     resolve();
//     console.log("async2");
//   });
// }

// function* generate() {
//   console.log("generate-1");
//   yield;
//   console.log("generate-1.2");
// }

// function* generate2() {
//   console.log("generate-2");
//   yield;
//   console.log("generate-2.2");
// }

// const { log } = console;
// log("script start");

// setTimeout(function setTimeOut() {
//   console.log("setTimeout");
// }, 0);

// const generator1 = generate();
// log(generator1.next());
// log(generator1.next());

// async1();

// new Promise(function promise(resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function promise2() {
//   console.log("promise2");
// });
// log("script end");
// const generator2 = generate2();
// generator2.next();
// generator2.next();

// function test() {
//   console.log("Console log in test");
//   setTimeout(() => {
//     console.log("Console log in first setTimeout");
//     setTimeout(() => {
//       console.log("Console log in second setTimeout");
//       setTimeout(() => {
//         console.log("Console log in third setTimeout");
//       }, 0);
//     }, 0);
//   }, 0);
// }

function* hello() {
  yield "Hello1";
  yield "Hello2";
  yield "Hello3";
  yield "Hello4";
  return "Hello5";
}

const generator = hello();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
