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
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}
