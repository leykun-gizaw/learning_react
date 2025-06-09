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
    };
  });
}
