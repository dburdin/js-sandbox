console.log("1 (Sync)");

async function asyncFunction1() {
  console.log("4 (Async)");

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate asynchronous operation

  console.log("6 (Async)");
}

function syncFunction1() {
  console.log("2 (Sync)");

  console.log("3 (Sync)");
}

async function asyncFunction2() {
  console.log("5 (Async)");

  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate asynchronous operation

  console.log("7 (Async)");
}

console.log("8 (Sync)");

syncFunction1();

(async () => {
  console.log("9 (Async)");

  await asyncFunction1();

  syncFunction1();

  await asyncFunction2();

  console.log("10 (Async)");
})();

// 1 - 8 - 2 - 3  - 9 - 4 - 6 - 2 - 3 - 5 - 7 - 10
