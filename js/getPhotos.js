import {getRandomNumber} from './getRandomNumber';
import {getComments} from './getComments';

const photosDescriptions = [
  'Бухта в Черногории',
  'Дорога к пляжу',
  'Лазурное море',
  'Отлив и прилив',
  'Обед в Нияме',
  'Тачка мечты',
  'Завтрак',
  'Ягодный чай',
  'Тот самый пляж',
  'Обувница ',
  'Пляжные тропки',
  'Где-то под Саратовом',
  'Ресторан высокой кухни',
  'Котосуши',
  'Новые тапуси',
  'Где-то над землей',
  'Вчерашний концерт',
  'Музей ретро-авто',
  'Ночные тапки',
  'Отель в Египте',
  'Тайский вайб',
  'Закат',
  'Краб',
  'Yo',
  'Сафари'
];

function getOnePhoto(i) {
  const onePhoto = {};

  onePhoto.id = i + 1;
  onePhoto.url = `photos/${onePhoto.id}.jpg`;
  onePhoto.description = photosDescriptions[i];
  onePhoto.likes = getRandomNumber(15,200);
  onePhoto.comments = getComments();

  return onePhoto;
}

export function getPhotos() {
  const photos = [];

  for(let i = 0; i < 25; i++){
    const photo = getOnePhoto(i);
    photos.push(photo);
  }

  return photos;
}
