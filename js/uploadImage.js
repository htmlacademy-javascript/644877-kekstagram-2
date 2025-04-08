import { onEscape } from './onEscape';
import { hashtagRegex } from './regExp';

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
  imageInput.value = null;
}

function onDocumentKeydown (evt) {
  onEscape(evt, closeEditImage);
}

const pristine = new Pristine(form);

form.addEventListener('submit', (evt)=> {
  evt.preventDefault();
  if (isFormValid()) {
    // todo: send request
  } else {
    // todo: show errors
  }
});

function isFormValid(){
  const isValid = pristine.validate();
  if (!isValid) {
    return false;
  }

  const formData = new FormData(form);
  const hashtags = formData.get('hashtags').split(' ').filter((element) => element.length > 0);
  if(hashtags.length > 5){
    return false;
  }
  const hasDuplicates = hashtags.some((element, index, array)=> array.indexOf(element) !== index);
  if (hasDuplicates) {
    return false;
  }
  const isValidFormat = hashtags.every((element) => hashtagRegex.test(element));
  if(!isValidFormat) {
    return false;
  }
  return true;
}
