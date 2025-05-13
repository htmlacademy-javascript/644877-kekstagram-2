import {getRandomNumber} from './getRandomNumber';
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Андрей',
  'Елизар',
  'Нафаня',
  'Марта',
  'Анисья',
  'Марк'
];

function createComment(i) {
  const minId = i * 10 + 1;
  const maxId = (i + 1) * 10;
  const avatarsCount = 6;
  const randomAvatarId = getRandomNumber(1,avatarsCount);
  const maxMessage = 2;
  const messagesCount = getRandomNumber(1,maxMessage);

  return {
    id:getRandomNumber(minId, maxId),
    avatar: `img/avatar-${randomAvatarId}.svg`,
    messages: Array.from({length: messagesCount}, () => getRandomArrayElement(MESSAGES)).join(' '),
    name: NAMES[getRandomNumber(0, NAMES.length - 1)]
  };
}

function getRandomArrayElement (array) {
  return array[getRandomNumber(0,array.length - 1)];
}

export function generateComments () {
  const maxComments = 30;
  const currentComments = getRandomNumber(0,maxComments);
  return Array.from({length: currentComments},(_, i) => createComment(i));
}
