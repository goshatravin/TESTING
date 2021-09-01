import progression from '../src/progression.js';

const description = 'What number is missing in the progression?';

const gameDetails = () => {
    const [question, correctAnswer] = progression();
    return [question, correctAnswer];
};
export default () => [gameDetails, description];
