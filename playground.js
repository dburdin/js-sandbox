for (let i = 0; i < 7; i++) {
  let symbol = "";

  switch (i) {
    case 0:
      symbol += "#";
      break;
    case 1:
      symbol += "##";
      break;
    case 2:
      symbol += "###";
      break;
    case 3:
      symbol += "####";
      break;
    case 4:
      symbol += "#####";
      break;
    case 5:
      symbol += "######";
      break;
    case 6:
      symbol += "#######";
      break;

    default:
      break;
  }

  console.log(symbol);
}
