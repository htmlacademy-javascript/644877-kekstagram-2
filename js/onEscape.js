const isEscapeKey = (evt) => evt.key === 'Escape';

export const onEscape = (evt, callback) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    callback();
  }
};
