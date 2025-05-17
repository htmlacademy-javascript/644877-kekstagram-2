import { POPUPS } from './constants';
import { onEscape } from './onEscape.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const popupsTemplate = {
  [POPUPS.SUCCESS]: successTemplate,
  [POPUPS.ERROR]: errorTemplate,
};

export const showPopup = (type) => {
  const message = popupsTemplate[type].cloneNode(true);

  document.body.appendChild(message);

  const closeSuccess = () => {
    message.remove();
  };
  const onDocumentKeydown = (evt) => {
    onEscape(evt, closeSuccess);
    document.addEventListener('keydown', onDocumentKeydown);
  };

  message.addEventListener('click', ({ target }) => {
    if (target.classList.contains(`${type}__button`) || target.classList.contains(type)) {
      closeSuccess();
    }
  });

  document.addEventListener('keydown', onDocumentKeydown);
};
