/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

function getStringLength(val) {
  if (val === null || val === undefined) {
    return 0;
  }
  return val.length;
}

function isString(val) {
  return typeof val === 'string' || val instanceof String;
}

function concatenateStrings(val1, val2) {
  return val1.concat(val2);
}

function getFirstChar(val) {
  return val.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(val) {
  return val.trim();
}

function removeLeadingWhitespaces(val) {
  return val.trimStart();
}

function removeTrailingWhitespaces(val) {
  return val.trimEnd();
}

function repeatString(str, times) {
  if (times < 0) return '';
  return str.repeat(times);
}

function removeFirstOccurrences(str, val) {
  const index = str.indexOf(val);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + val.length);
}

function removeLastOccurrences(str, val) {
  const index = str.lastIndexOf(val);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + val.length);
}

function sumOfCodes(str) {
  if (str === null || str === undefined) return 0;
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function startsWith(str, val) {
  return str.startsWith(val);
}

function endsWith(str, val) {
  return str.endsWith(val);
}

function formatTime(min, sec) {
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, val) {
  return str.includes(val);
}

function countVowels(str) {
  const VOWELS = 'aeiouyAEIOUY';
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (VOWELS.includes(str[i])) {
      sum += 1;
    }
  }
  return sum;
}

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zа-ёя]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  const bigLetter = str.toUpperCase();
  const smallLetter = str.toLowerCase();
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== bigLetter[i]) {
      result += bigLetter[i];
    } else {
      result += smallLetter[i];
    }
  }
  return result;
}

function getStringFromTemplate(first, second) {
  return `Hello, ${first} ${second}!`;
}

function extractNameFromTemplate(value) {
  return value.slice(7, value.length - 1);
}

function unbracketTag(str) {
  return str.replace('<', '').replace('>', '');
}

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      code = ((code - 65 + 13) % 26) + 65;
      char = String.fromCharCode(code);
    } else if (code >= 97 && code <= 122) {
      code = ((code - 97 + 13) % 26) + 97;
      char = String.fromCharCode(code);
    }

    result += char;
  }

  return result;
}

function getCardId(value) {
  const CARDS = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];

  return CARDS.indexOf(value);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
