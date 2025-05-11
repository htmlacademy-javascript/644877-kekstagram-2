import { onEscape } from './onEscape.js';
import { isFormValid, resetValidation } from './validation.js';
import { resetScale } from './pictureScale.js';
import { changeEffect } from './pictureEffect.js';
import { uploadImage } from './api.js';

const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const imageUploadCancel = document.querySelector('.img-upload__cancel');
const imageInput = document.getElementById('upload-file');
const form = document.getElementById('upload-select-image');
const commentsText = document.querySelector('.text__description');
const hashtagsText = document.querySelector('.text__hashtags');
const submitButton = document.getElementById('upload-submit');
const successTemplate = document.getElementById('success');
const errorTemplate = document.getElementById('error');

imageUploadCancel.addEventListener('click', closeEditImage);

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
  imageInput.value = null;
  form.reset();
  resetValidation();
}

function onDocumentKeydown (evt) {
  onEscape(evt, closeEditImage);
}

form.addEventListener('submit', (evt)=> {
  evt.preventDefault();

  if (isFormValid()) {
    const formData = new FormData(evt.target);
    disableSubmitButton();
    uploadImage(formData)
      .then((response) => {
        if (response.ok) {
          onSuccessUpload();
        } else {
          showError();
        }
      })
      .catch(() => {
        showError();
      })
      .finally(()=>{
        enableSubmitButton();
      });
  }
});

function disableSubmitButton () {
  submitButton.disabled = true;
}

function enableSubmitButton () {
  submitButton.disabled = false;
}

function onSuccessUpload(){
  closeEditImage();
  resetScale();
  changeEffect('none');
  showSuccess();
}

function showSuccess(){
  const message = successTemplate.content.cloneNode(true);
  document.body.appendChild(message);
  const successButton = document.body.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', onSuccessKeydown);
  document.body.addEventListener('click', closeSuccess);

  function closeSuccess(){
    const container = document.querySelector('section.success');
    container.remove();
    document.body.removeEventListener('click', closeSuccess);
  }
  function onSuccessKeydown (evt){
    onEscape(evt, closeSuccess);
    document.addEventListener('keydown', onSuccessKeydown);
  }
}

function showError(){
  const message = errorTemplate.content.cloneNode(true);
  document.body.appendChild(message);
  const errorButton = document.body.querySelector('.error__button');
  errorButton.addEventListener('click', closeError);
  document.addEventListener('keydown', onErrorKeydown);
  document.body.addEventListener('click', closeError);

  function closeError(){
    const container = document.querySelector('section.error');
    container.remove();
    document.body.removeEventListener('click', closeError);
  }
  function onErrorKeydown (evt){
    onEscape(evt, closeError);
    document.addEventListener('keydown', onErrorKeydown);
  }
}
