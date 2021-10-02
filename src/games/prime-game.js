import getRandomNumber from '../getRandomNumber.js';

const isPrime = (a) => {
  const sqrt = Math.floor(Math.sqrt(a));
  for (let i = 2; i <= sqrt; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};
export default () => [getGameData, description];
