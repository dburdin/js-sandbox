function countEmoji(message, emoji) {
  const result = {};
  let currentName = "";
  let currentCount = 0;

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    const charCode = message.charCodeAt(i);

    if (char === "<") {
      // Find the beginning of the name
      while (message[i] !== "@" && i < message.length) {
        i++;
      }
      currentName = "";

      if (i < message.length) {
        i++;

        // Read the name
        while (
          message[i] !== " " &&
          message[i] !== "/" &&
          message[i] !== ">" &&
          i < message.length
        ) {
          currentName += message[i];
          i++;
        }

        // Convert the name to lowercase using charCodeAt/fromCharCode
        currentName = currentName
          .split("")
          .map((char) => String.fromCharCode(char.charCodeAt(0) + 32))
          .join("");
      }
    } else if (char === emoji[0]) {
      // Check if the current substring matches the emoji
      const currentSubstring = message.substring(i, i + emoji.length);
      if (currentSubstring === emoji) {
        currentCount++;

        // Move the index to the end of the emoji
        i += emoji.length - 1;
      }
    }

    // If '>' or ' ' is found, save the result and reset variables
    if ((char === ">" || char === " ") && currentName !== "") {
      result[currentName] = currentCount;
      currentCount = 0;
    }
  }

  return result;
}

const text = "<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:";
const result = countEmoji(text, "apple");
console.log(result);
