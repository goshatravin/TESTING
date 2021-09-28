import getRandomNum from '../getRandomNum.js';

const getProgression = (startingElem, step, length) => {
  const arr = [];
  for (let i = startingElem; arr.length <= 9; i += step) {
    arr.push(i + step);
  }
  const answer = arr[length - step];
  arr[length - step] = '..';
  return [arr.join(' '), answer.toString()];
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const [question, correctAnswer] = getProgression(getRandomNum(1, 20), getRandomNum(1, 10), 10);
  return [question, correctAnswer];
};
export default () => [getGameData, description];
