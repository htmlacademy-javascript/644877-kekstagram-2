import { onEscape } from './onEscape.js';
import { isFormValid, resetValidation } from './validation.js';
import { resetScale } from './photoScale.js';
import { changeEffect } from './photoEffect.js';
import { uploadImage } from './api.js';
import { Popups } from './constants.js';
import { showPopup } from './popup.js';

const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const imageUploadCancel = document.querySelector('.img-upload__cancel');
const imageInput = document.getElementById('upload-file');
const form = document.getElementById('upload-select-image');
const commentsText = document.querySelector('.text__description');
const hashtagsText = document.querySelector('.text__hashtags');
const submitButton = document.getElementById('upload-submit');
const preview = document.querySelector('.img-upload__preview > img');
const previews = document.querySelectorAll('.effects__preview');

imageUploadCancel.addEventListener('click', closeEditImage);

[commentsText, hashtagsText].forEach((element) => {
  element.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
});

export function editImage() {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  const file = imageInput.files[0];
  const url = URL.createObjectURL(file);
  preview.src = url;

  previews.forEach((item) => {
    item.style.backgroundImage = `url(${url})`;
  });
}

export function closeEditImage() {
  document.body.classList.remove('modal-open');
  imageUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  imageInput.value = null;
  form.reset();
  resetValidation();
}

function onDocumentKeydown(evt) {
  if (!document.querySelector(`.${Popups.ERROR}`)) {
    onEscape(evt, closeEditImage);
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isFormValid()) {
    const formData = new FormData(evt.target);
    disableSubmitButton();
    uploadImage(formData)
      .then((response) => {
        if (response.ok) {
          onSuccessUpload();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        enableSubmitButton();
      });
  }
});

function disableSubmitButton() {
  submitButton.disabled = true;
}

function enableSubmitButton() {
  submitButton.disabled = false;
}

function onSuccessUpload() {
  closeEditImage();
  resetScale();
  changeEffect('none');
  showPopup(Popups.SUCCESS);
}
