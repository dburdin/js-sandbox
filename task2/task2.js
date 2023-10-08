import { parseIntege } from "../task1/task1.js";

const text = "My wallet balance is 14960 USDT";

function parseBalance(message) {
  let result = "";

  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);

    if (charCode >= 48 && charCode <= 57) {
      result += message[i];
    }
  }

  return parseIntege(result);
}

console.log("result", parseBalance(text));
// Дозволено використовувати:
// - 1 цикл for
// - charCodes
