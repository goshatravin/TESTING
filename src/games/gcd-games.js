import getRandomNum from '../getRandomNum.js';

const gcd = (a, b) => {
  if (!b) {
    return a.toString();
  }

  return gcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getRandomNum(1, 10);
  const number2 = getRandomNum(1, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [question, correctAnswer];
};
export default () => [getGameData, description];
