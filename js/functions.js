// eslint-disable-next-line no-unused-vars
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// eslint-disable-next-line no-unused-vars
function checkPalindrom (str) {
  const check = str.replaceAll(' ', '').toLowerCase();
  for(let i = 0; i < check.length; i++) {
    const isEqual = check.at(i) === check.at(-i - 1);
    if(!isEqual){
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line no-unused-vars
function getNumber(str){
  const checked = str.toString();
  let numbers = '';
  for(let i = 0; i < checked.length; i++) {
    const check = parseInt(checked[i], 10);
    if (!Number.isNaN(check)) {
      numbers += checked[i];
    }
  }
  return parseInt(numbers, 10);
}

export function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
