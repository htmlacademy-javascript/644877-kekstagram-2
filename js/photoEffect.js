const sliderElement = document.querySelector('.effect-level__slider');
const effectList = Array.from(document.querySelectorAll('.effects__list input[type="radio"]'));
const valueElement = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevels = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  },
};

let effect = 'none';

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

effectList.forEach((effectElement) => {
  effectElement.addEventListener('change',()=> {
    changeEffect(effectElement.value);
  });
});

export function changeEffect(effectValue){
  effect = effectValue;
  changeImageStyle(valueElement.value);
  if (effect === 'none'){
    hideSliderContainer();
  }else{
    const effectLevelOptions = effectLevels[effect];
    sliderElement.noUiSlider.updateOptions(effectLevelOptions,true);
    showSliderContainer();
  }
}

function changeImageStyle(effectLevel){
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
}

function hideSliderContainer() {
  sliderContainer.classList.add('hidden');
}

function showSliderContainer() {
  sliderContainer.classList.remove('hidden');
}

changeEffect('none');
