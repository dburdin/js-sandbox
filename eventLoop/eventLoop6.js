console.log("Start");

setTimeout(function cbT() {
  console.log("CD SetTimeout");
}, 0);

fetch("https://netflix-unofficial.p.rapidapi.com/api/genres").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
