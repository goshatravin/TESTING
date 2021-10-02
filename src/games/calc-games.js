import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const first = getRandomNumber(1, 10);
  const second = getRandomNumber(1, 10);
  console.log(first, second);
  const operators = ['+', '-', '*'];
  const randomOperator = getRandomNumber(1, operators.length);
  let question = '';
  let correctAnswer = '';
  switch (operators[randomOperator - 1]) {
    case ('-'):
      question = `${first} - ${second}`;
      correctAnswer = first - second;
      break;
    case ('*'):
      question = `${first} * ${second}`;
      correctAnswer = first * second;
      break;
    default:
      question = `${first} + ${second}`;
      correctAnswer = first + second;
  }
  return [question, correctAnswer.toString()];
};

export default () => [getGameData, description];
