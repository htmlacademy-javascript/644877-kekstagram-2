import {BASE_API_URL} from './constants';

export function uploadImage(formData){
  return fetch(
    `${BASE_API_URL}kekstagram/`,
    {
      method: 'POST',
      body: formData,
    },
  );
}

export function loadImages() {
  return fetch(
    `${BASE_API_URL}kekstagram/data`,
  );
}
