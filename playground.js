// const objD = {
//   c: 12,
//   d: 15,
//   showC() {
//     console.log(this.c);
//   },
// };

// const objE = Object.create(objD);
// objE.c = 15;

// objE.showC();

// function* a() {
//   console.log("1");
//   yield 5;
//   console.log("2");
//   return 6;
// }

// const generator = a();

// console.log(generator.next(), generator.next());

// const obj = {
//   title: "World",
//   showFullTitle: () => {
//     console.log(this);
//   },
// };

// obj.showFullTitle();

// makeDish("cheese", "Ajax");
// makeDish("tomato", "Ajax");
// makeDish("eggs", "Ajax");

// const makeSheff = function (sheff) {
//   const makeDish = function (dish) {
//     console.log(`${sheff} is making ${dish}`);
//   };

//   return makeDish;
// };

// const ajax = makeSheff("Ajax");
// const poly = makeSheff("Poly");

// ajax("cheese");
// poly("eggs");
// function a() {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// }

// a(1, 2, 3, 4, 5);

// const objA = {
//   a: 5,
//   showX() {
//     const objB = {
//       b: 5,
//       showThis: () => {
//         console.log(this);
//       },
//     };
//     objB.showThis();
//   },
// };

// objA.showX();

// const arr = [1, 2, 3, 4, 5, [123], [1, 2, 4], [12, [1, 2, 4, 5, [100]]]];

// console.log(arr.forEach((num) => num * 2));

// console.log(arr.map((num) => num * 2));

// console.log(arr.flat(3));
