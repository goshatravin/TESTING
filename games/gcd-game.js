import gcd from '../src/gcd.js';
import random from '../src/randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const gameDetails = () => {
  const number1 = random();
  const number2 = random();
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [question, correctAnswer];
};
export default () => [gameDetails, description];
