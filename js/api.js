import {BASE_API_URL} from './constants';

export const uploadImage = (formData) => fetch(
  `${BASE_API_URL}kekstagram/`,
  {
    method: 'POST',
    body: formData,
  },
);

export const loadImages = () => fetch(
  `${BASE_API_URL}kekstagram/data`,
);
