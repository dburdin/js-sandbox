// *5) Перестворити повну копію методів. Можна користуватись циклами for або while

// ? 1) function parseInteger(str) (заборонено використовувати любі методи парсингу числа зі строк. Заборонено +str, 1 * str, parseInt, parseFloat, Number, etc)

// ? 2) function includes(text, matchStr, index) (заборонено використовувати indexOf та інщі методи. Реалізація повинна бути без перевикористань інших методів)

// ? 3) function split(text, divider) (заборонено використовувати нативні методи. Реалізація повинна бути без перевикористань інших методів)

// Повторити поведінку нативниї методів 1 в 1.

export const parseIntege = function (str) {
  let result = 0;
  let i = 0;
  let sign = 1;

  if (str.length === 0 || !str) {
    return NaN;
  }

  if (str[0] === "-") {
    sign = -1;
    i = 1;
  } else if (str[0] === "+") {
    i = 1;
  }

  while (i < str.length) {
    const charCode = str.charCodeAt(i);

    if (charCode >= 48 && charCode <= 57) {
      const digit = charCode - 48;

      result = result * 10 + digit;
    } else {
      break;
    }

    i += 1;
  }

  return result * sign || NaN;
};
// console.log(parseIntege("2313123"));

// function includes(text, matchStr, index = 0) {
//   let match = true;

//   if (index < 0 || index >= text.length) {
//     return false;
//   }

//   for (let i = index; i < text.length; i += 1) {
//     for (let j = 0; j < matchStr.length; j += 1) {
//       if (text[i + j] !== matchStr[j]) {
//         match = false;
//         break;
//       }
//     }

//     if (match) {
//       return true;
//     }
//   }
//   return false;
// }
