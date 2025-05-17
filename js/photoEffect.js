import { EFFECT_LEVELS } from './constants';

const sliderElement = document.querySelector('.effect-level__slider');
const effects = Array.from(document.querySelectorAll('.effects__list input[type="radio"]'));
const valueElement = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');

let effect = 'none';

const changeImageStyle = (effectLevel) => {
  if(effect === 'none'){
    image.style.filter = null;
  }
  if (effect === 'chrome') {
    image.style.filter = `grayscale(${effectLevel})`;
  }
  if (effect === 'sepia') {
    image.style.filter = `sepia(${effectLevel})`;
  }
  if (effect === 'marvin') {
    image.style.filter = `invert(${effectLevel}%)`;
  }
  if (effect === 'phobos') {
    image.style.filter = `blur(${effectLevel}px)`;
  }
  if (effect === 'heat') {
    image.style.filter = `brightness(${effectLevel})`;
  }
};

const hideSliderContainer = () => {
  sliderContainer.classList.add('hidden');
};

const showSliderContainer = () => {
  sliderContainer.classList.remove('hidden');
};

export const changeEffect = (effectValue)=>{
  effect = effectValue;
  changeImageStyle(valueElement.value);
  if (effect === 'none'){
    hideSliderContainer();
  }else{
    const effectLevelOptions = EFFECT_LEVELS[effect];
    sliderElement.noUiSlider.updateOptions(effectLevelOptions,true);
    showSliderContainer();
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get(true);
  changeImageStyle(valueElement.value);
});

effects.forEach((effectElement) => {
  effectElement.addEventListener('change',()=> {
    changeEffect(effectElement.value);
  });
});

changeEffect('none');
