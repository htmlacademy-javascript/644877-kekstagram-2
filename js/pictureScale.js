const smaller = document.querySelector('.scale__control--smaller');
const bigger = document.querySelector('.scale__control--bigger');
const scale = document.querySelector('.scale__control--value');
const scaleStep = 25;
const maxScale = 100;
const minScale = 25;
const imagePreview = document.querySelector('.img-upload__preview > img');
imagePreview.style.transition = 'transform 0.1s ease-in-out';


smaller.addEventListener('click',() => {
  changeScale(-scaleStep);
});

bigger.addEventListener('click',() => {
  changeScale(scaleStep);
});

function changeScale (changeValue) {
  const currentScale = parseInt(scale.value.slice(0, scale.value.length - 1), 10);
  const newScale = currentScale + changeValue;

  if(newScale > maxScale || newScale < minScale){
    return;
  }
  scale.value = `${newScale}%`;
  imagePreview.style.transform = `scale(${newScale / 100})`;
}
