import { words } from './constants';

export function generateKeyboard() {
  const chosenWord =
    words[Math.floor(Math.random() * words.length)].toUpperCase();
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM';

  return letters.split('').map((ltr) => {
    const foundAt: number[] = [];
    chosenWord.split('').forEach((char, index) => {
      if (ltr === char) {
        foundAt.push(index);
      }
    });
    return {
      ltr,
      foundAt,
      clicked: false,
    };
  });
}

export function getFarewellText(language: string): string {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
