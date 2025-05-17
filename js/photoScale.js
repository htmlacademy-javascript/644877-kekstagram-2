const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const smaller = document.querySelector('.scale__control--smaller');
const bigger = document.querySelector('.scale__control--bigger');
const scale = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview > img');
imagePreview.style.transition = 'transform 0.1s ease-in-out';

export const changeScale = (changeValue) => {
  const currentScale = parseInt(scale.value.slice(0, scale.value.length - 1), 10);
  const newScale = currentScale + changeValue;

  if(newScale > MAX_SCALE || newScale < MIN_SCALE){
    return;
  }
  scale.value = `${newScale}%`;
  imagePreview.style.transform = `scale(${newScale / 100})`;
};

export const resetScale = () => {
  scale.value = '100%';
  imagePreview.style.transform = null;
};

smaller.addEventListener('click',() => {
  changeScale(-SCALE_STEP);
});

bigger.addEventListener('click',() => {
  changeScale(SCALE_STEP);
});
