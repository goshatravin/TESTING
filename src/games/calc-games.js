import getRandomInt from '../randomNumber.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
    const first = getRandomInt(5,10);
    const second = getRandomInt(1,5);
    const operators = ['+','-','*']
    const randomOperator = getRandomInt(1,3);
    let question = '';
    let correctAnswer = '';
    switch (operators[randomOperator]) {
        case ("-"):
            question = `${first} - ${second}`;
            correctAnswer = first - second;
            break;
        case ("*"):
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
