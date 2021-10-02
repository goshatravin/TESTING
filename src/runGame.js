import readlineSync from 'readline-sync';

const runGame = (getGameDetais) => {
  const count = 3;
  const [gameDetails, description] = getGameDetais();
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(description);
  for (let i = 0; i < count; i += 1) {
    const [question, correctAnswer] = gameDetails();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
