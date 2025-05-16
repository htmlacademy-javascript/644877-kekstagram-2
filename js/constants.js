export const HASHTAG_FORMULA = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_COMMENTS = 140;
export const HASHTAGS_COUNT = 5;
export const BASE_API_URL = 'https://31.javascript.htmlacademy.pro/';
export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};
export const EFFECT_LEVELS = {
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
