function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
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
