import {getRandomNumber} from './getRandomNumber';
import {getComments} from './getComments';

const PHOTOES_DESCRIPTIONS = [
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
  const minLikes = 15;
  const maxLikes = 200;

  onePhoto.id = i + 1;
  onePhoto.url = `photoes/${onePhoto.id}.jpg`;
  onePhoto.description = PHOTOES_DESCRIPTIONS[i];
  onePhoto.likes = getRandomNumber(minLikes,maxLikes);
  onePhoto.comments = getComments();

  return onePhoto;
}

export function getPhotoes() {
  const photoes = [];
  const photoCount = 25;

  for(let i = 0; i < photoCount; i++){
    const photo = getOnePhoto(i);
    photoes.push(photo);
  }

  return photoes;
}
