import * as readline from 'readline';
import Agent from './Agent';

const ask = (questionText) => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        leitor.question(questionText, (input) => { resolve(input); leitor.close()} );
    });
}

const Main = async () => {
    const start = await ask("Qual o ponto de partida? ");
    const end = await ask("Qual o ponto de destino? ");

    new Agent(Number(start), Number(end));
}

Main();