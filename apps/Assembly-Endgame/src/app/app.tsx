import { type JSX, useState } from 'react';
import { languages } from '../utils/constants';
import { generateKeyboard } from '../utils/helpers';
import clsx from 'clsx';

export function App() {
  const [keyboard, setKeyboard] = useState(() => generateKeyboard());

  const wrongAttempts = keyboard
    .filter((key) => key.foundAt.length === 0)
    .reduce((acc, key) => acc + (key.clicked ? 1 : 0), 0);
  console.log('Wrong attempts:', wrongAttempts);

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
  // using innerText.
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
            className="bg-[rgb(50,50,50)] h-12 w-12 border-b flex justify-center items-center text-3xl font-extralight"
          >
            {keyObj.clicked ? keyObj.ltr : ''}
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
      <button key={key.ltr} className={keyStatusClass} onClick={handleClick}>
        {key.ltr}
      </button>
    );
  });

  return (
    <>
      <section className="title text-center mt-40 flex flex-col gap-2 max-w-96">
        <h1 className="text-2xl text-[rgb(249,244,218)]">Assembly: Endgame</h1>
        <p className="text-[rgb(135,135,135)] max-w-[400px] text-lg">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </section>
      <section className="mt-10 h-[60px] bg-[rgb(21,169,90)] w-[500px] rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-center text-[rgb(249,244,218)] text-xl">
          You Won!
        </h2>
        <p className="text-center">
          Well done{' '}
          <span role="img" aria-label="Party popper emoji">
            🎉
          </span>
        </p>
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
    </>
  );
}

export default App;
