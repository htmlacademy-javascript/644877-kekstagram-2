import { HASHTAG_FORMULA, HASHTAGS_COUNT, MAX_COMMENTS } from './constants.js';

const form = document.getElementById('upload-select-image');
const commentsText = document.querySelector('.text__description');
const hashtagsText = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkComments = (value) => value.length <= MAX_COMMENTS;
const getHashtags = (value) => value.toLowerCase().split(' ').filter((element) => element.length > 0);

const checkHashTag = (value) => {
  if(!value.length){
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((element) => HASHTAG_FORMULA.test(element));
};

const checkHashTagCount = (value) => {
  if(!value.length){
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= HASHTAGS_COUNT;
};

const checkUniquesHashtags = (value) => {
  if(!value.length){
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

pristine.addValidator(
  hashtagsText,
  checkHashTag,
  'Невалидный хештег'
);

pristine.addValidator(
  hashtagsText,
  checkHashTagCount,
  `Количество хештегов не должно превышать ${HASHTAGS_COUNT}`
);

pristine.addValidator(
  hashtagsText,
  checkUniquesHashtags,
  'Хештеги должны быть уникальными'
);

pristine.addValidator(
  commentsText,
  checkComments,
  `Длина коментария не должна превышать ${MAX_COMMENTS}`
);

export const isFormValid = () => pristine.validate();
export const resetValidation = () => pristine.reset();
