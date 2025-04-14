export function onEscape(evt, callback) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    callback();
  }
}

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}
