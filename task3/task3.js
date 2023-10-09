function countBalance(message) {
  const result = {};
  let currentName = "";
  let currentAmount = 0;

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    const charCode = message.charCodeAt(i);

    if (char === "<") {
      // Знаходимо початок імені
      while (message[i] !== "@" && i < message.length) {
        i++;
      }
      currentAmount = 0;
      currentName = "";
      if (i < message.length) {
        i++;

        while (message[i] !== " " && i < message.length) {
          currentName += message[i];
          i++;
        }

        let firstLetterCharCode = currentName.charCodeAt(0);
        let firstLetterToLowerCase = String.fromCharCode(firstLetterCharCode + 32);

        currentName = firstLetterToLowerCase + currentName.slice(1);
      }
    } else if (charCode >= 48 && charCode <= 57) {
      // Зчитуємо суму грошей
      currentAmount = currentAmount * 10 + (charCode - 48);
    }

    // зберігаємо результат
    if (currentName !== "") {
      result[currentName] = currentAmount;
    }
  }

  return result;
}

const text =
  "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT";

const balance = countBalance(text);
console.log(balance);

// result {
//  kate: 1000,
//  dmitrty: 350,
//  max: 600
//}

// обмеженя:
// - 1 цикл for
// - 1 object для збереження результатів
// - charCodeAt для знаходження необхідних символів, та fromCharCode для перетворення в lower case
