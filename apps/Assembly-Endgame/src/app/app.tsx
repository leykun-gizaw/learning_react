import { type JSX, useState } from 'react';
import { languages } from '../utils/constants';
import { generateKeyboard, getFarewellText } from '../utils/helpers';
import clsx from 'clsx';
import ReactConfetti from 'react-confetti';

export function App() {
  const [keyboard, setKeyboard] = useState(() => generateKeyboard());

  const presentKeys = keyboard.filter((key) => key.foundAt.length > 0);
  const missingKeys = keyboard.filter((key) => key.foundAt.length === 0);

  const wrongAttempts = missingKeys.reduce(
    (acc, key) => acc + (key.clicked ? 1 : 0),
    0
  );
  const remainingGuesses = presentKeys.reduce(
    (acc, key) => (key.clicked ? acc : acc + 1),
    0
  );

  const gameWon =
    presentKeys.every((keyObj) => keyObj.clicked) && wrongAttempts < 8;
  const gameLost = wrongAttempts >= 8;
  const gameOver = gameWon || gameLost;

  const LanguageElements = languages.map((language, idx) => {
    const classNames = clsx({
      'text-md': true,
      'rounded-[3px]': true,
      'p-1': true,
      relative: true,
      'before:absolute': idx < wrongAttempts,
      'before:content-["💀"]': idx < wrongAttempts,
      'before:z-10': idx < wrongAttempts,
      'before:inset-0': idx < wrongAttempts,
      'before:bg-black': idx < wrongAttempts,
      'before:opacity-70': idx < wrongAttempts,
      'before:flex': idx < wrongAttempts,
      'before:items-center': idx < wrongAttempts,
      'before:justify-center': idx < wrongAttempts,
    });
    return (
      <span
        className={classNames}
        key={language.name}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color,
        }}
      >
        {language.name}
      </span>
    );
  });

  // I resisted the urge to use a for loop to insert letters into spans
  // using innerText. I wanted to keep it functional and declarative.
  const letterElements: JSX.Element[] = Array(
    keyboard
      .filter((key) => key.foundAt.length > 0)
      .reduce((acc, key) => acc + key.foundAt.length, 0)
  );
  keyboard
    .filter((keyObj) => keyObj.foundAt.length > 0)
    .forEach((keyObj) => {
      keyObj.foundAt.forEach((index) => {
        letterElements[index] = (
          <span
            key={index}
            className={
              'bg-[rgb(50,50,50)] h-12 w-12 border-b flex justify-center items-center text-3xl font-extralight ' +
              clsx({
                'text-[rgb(236,93,73)]': gameLost && !keyObj.clicked,
              })
            }
          >
            {keyObj.clicked || gameOver ? keyObj.ltr : ''}
          </span>
        );
      });
    });

  const keyboardElements = keyboard.map((key) => {
    const keyStatusClass = clsx({
      'bg-[rgb(252,186,41)]': !key.clicked,
      'text-[rgb(30,30,30)]': true,
      'font-semibold': true,
      'text-xl': true,
      border: true,
      'border-[rgb(168,168,168)]': true,
      'w-12': true,
      'h-12': true,
      rounded: true,
      'rounded-md': true,
      'bg-[rgb(16,169,91)]': key.foundAt.length > 0 && key.clicked,
      'bg-[rgb(236,93,73)]': key.foundAt.length === 0 && key.clicked,
    });
    const handleClick = () => {
      setKeyboard(
        keyboard.map((k) => (k.ltr === key.ltr ? { ...k, clicked: true } : k))
      );
    };
    return (
      <button
        key={key.ltr}
        className={keyStatusClass}
        onClick={handleClick}
        disabled={gameOver}
      >
        {key.ltr}
      </button>
    );
  });

  const generateWallText = () => {
    const winMessage = (
      <>
        <h2 className="text-center text-[rgb(249,244,218)] text-xl">
          You Won!
        </h2>
        <p className="text-center">
          Well done{' '}
          <span role="img" aria-label="Party popper emoji">
            🎉
          </span>
        </p>
      </>
    );
    const loseMessage = (
      <>
        <h2 className="text-center text-[rgb(249,244,218)] text-xl">
          Game Over!
        </h2>
        <p className="text-center">
          You lose! Better start learning Assembly{' '}
          <span role="img" aria-label="Cry emoji">
            😭
          </span>
        </p>
      </>
    );
    const lostLetterMessage =
      wrongAttempts > 0 ? (
        <p>{getFarewellText(languages[wrongAttempts - 1].name)}</p>
      ) : null;

    if (gameWon) return winMessage;
    if (gameLost) return loseMessage;
    if (wrongAttempts > 0) return lostLetterMessage;
    return null;
  };

  return (
    <>
      {/* Confetti */}
      {gameWon && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      <section className="title text-center mt-40 flex flex-col gap-2 max-w-96">
        <h1 className="text-2xl text-[rgb(249,244,218)]">Assembly: Endgame</h1>
        <p className="text-[rgb(135,135,135)] max-w-[400px] text-lg">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </section>
      <section className="mt-6 text-center text-[rgb(135,135,135)]">
        <p>Wrong Attempts: {wrongAttempts} / 8</p>
        <p>Remaining Letters: {remainingGuesses}</p>
      </section>
      <section
        className={
          'mt-10 h-[60px] w-[500px] rounded-lg flex flex-col justify-center items-center text-base font-light italic ' +
          clsx({
            'bg-[rgb(21,169,90)]': gameWon,
            'bg-[rgb(236,93,73)]': gameLost,
            'bg-[rgb(122,94,167)]': wrongAttempts > 0 && !gameOver,
            'rounded-none border border-[rgb(40,39,38)] border-dashed':
              wrongAttempts > 0 && !gameOver,
          })
        }
      >
        {generateWallText()}
      </section>
      <section className="mt-10 flex flex-wrap gap-[2px] justify-center w-[350px] relative">
        {LanguageElements}
      </section>
      <section className="mt-10 w-[500px] flex justify-center items-center gap-1">
        {letterElements}
      </section>
      <section className="mt-10 text-center w-[500px] flex flex-wrap justify-center gap-2">
        {keyboardElements}
      </section>
      {gameOver && (
        <section className="mt-10 text-center">
          <button
            className="bg-[rgb(17,181,229)] border border-white text-[rgb(30,30,30)] font-normal w-fit text-lg px-4 py-2 rounded-md"
            onClick={() => setKeyboard(generateKeyboard())}
          >
            New Game
          </button>
        </section>
      )}
    </>
  );
}

export default App;
