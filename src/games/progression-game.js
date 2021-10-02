import getRandomNumber from '../getRandomNumber.js';

const getProgression = (startingElem, step, length) => {
  const arr = [];
  for (let i = startingElem; arr.length < length; i += step) {
    arr.push(i + step);
  }
  return arr;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = getProgression(getRandomNumber(1, 20), getRandomNumber(1, 10), 10);
  const indexForProgression = getRandomNumber(1, 10);
  const correctAnswer = progression[indexForProgression].toString();
  progression[indexForProgression] = '..';
  return [progression.join(' '), correctAnswer];
};
export default () => [getGameData, description];
