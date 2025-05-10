import { onEscape } from './onEscape.js';
import { isFormValid, resetValidation } from './validation.js';
import './pictureScale.js';
import './slider.js';

const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const imageUploadCancel = document.querySelector('.img-upload__cancel');
imageUploadCancel.addEventListener('click', closeEditImage);
const imageInput = document.getElementById('upload-file');
const form = document.getElementById('upload-select-image');
const commentsText = document.querySelector('.text__description');
const hashtagsText = document.querySelector('.text__hashtags');

[commentsText, hashtagsText].forEach((element) => {
  element.addEventListener('keydown',(evt) =>{
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
});

export function editImage () {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

export function closeEditImage(){
  document.body.classList.remove('modal-open');
  imageUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  // imageInput.value = null;
  form.reset();
  resetValidation();
}

function onDocumentKeydown (evt) {
  onEscape(evt, closeEditImage);
}

form.addEventListener('submit', (evt)=> {

  if (!isFormValid()) {
    evt.preventDefault();
  }
});
