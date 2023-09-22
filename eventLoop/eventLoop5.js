function isClear() {
  setTimeout(() => console.log("2"), 0);

  //   const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //   console.log(result);
  fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((result) => console.log(result));
  new Promise((resolve) => {
    console.log("3");
    resolve();
  })
    .then(() => {
      console.log("5");
    })
    .then(() => {
      console.log("6");
    })
    .then(() => {
      console.log("7");
    });
}

console.log("1");

isClear();

console.log("8");

// 1 - 3 - 8 - 5 - 6 - 7 -2
