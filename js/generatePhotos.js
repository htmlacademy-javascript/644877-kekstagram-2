import {getRandomNumber} from './getRandomNumber';
import {generateComments} from './generateComments';

const PHOTOS_DESCRIPTIONS = [
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

function createPhoto(i) {
  const minLikes = 15;
  const maxLikes = 200;
  return {
    id:  i + 1,
    url:  `photos/${i + 1}.jpg`,
    description: PHOTOS_DESCRIPTIONS[i] ?? 'Без описания',
    likes: getRandomNumber(minLikes,maxLikes),
    comments: generateComments()
  };
}

export function generatePhotos() {
  const photoCount = 25;
  return Array. from({length: photoCount}, (_, i) => createPhoto(i));
}
