import {BASE_API_URL} from './constants';

export function uploadImage(formData){
  return fetch(
    `${BASE_API_URL}kekstagram`,
    {
      method: 'POST',
      body: formData,
    },
  );
}
