import getRandomInt from '../randomNumber.js';

const progression = (startingElem, step, length) => {
  const arr = [];
  for (let i = startingElem; arr.length <= 9; i += step) {
    arr.push(i + step);
  }
  const answer = arr[length - step];
  arr[length - step] = '...';
  return [arr.join(' '), answer.toString()];
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const [question, correctAnswer] = progression(getRandomInt(1, 20), getRandomInt(1, 10), 10);
  return [question, correctAnswer];
};
export default () => [getGameData, description];
