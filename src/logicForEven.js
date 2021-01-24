import readlineSync from 'readline-sync';
const foo = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName)
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
    console.log('Question: 15')
    const firstAnsw = readlineSync.question('Your answer: ');

    if (firstAnsw === 'no') {
        console.log('Correct!')
    } else {
        console.log(`'${firstAnsw}' is wrong answer ;(. Correct answer was 'no'.`)
        return 'Let\'s try again, ' + userName
    };

    console.log('Question: 8')
    const secondAnsw = readlineSync.question('Your answer: ');
    if (secondAnsw === 'yes') {
        console.log('Correct!')
    } else {
        console.log(`'${secondAnsw}' is wrong answer ;(. Correct answer was 'yes'.`)
        return 'Let\'s try again, ' + userName
    };

    console.log('Question: 6')
    const thirdAnsw = readlineSync.question('Your answer: ');
    if (thirdAnsw === 'yes') {
        console.log('Correct!')
        return `Congratulations, ` + userName + '!'
    } else {
        console.log(`'${thirdAnsw}' is wrong answer ;(. Correct answer was 'yes'.`)
        return 'Let\'s try again, ' + userName
    };
};

export default foo;