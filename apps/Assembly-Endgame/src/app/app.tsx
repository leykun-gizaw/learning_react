import { useState } from 'react';
import { languages } from '../utils/constants';
import { generateKeyboard } from '../utils/helpers';

export function App() {
  const [keyboard, setKeyboard] = useState(() => generateKeyboard());
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
      <section className="mt-10 flex flex-wrap gap-[2px] justify-center w-[350px]">
        {languages.map((language) => (
          <span
            className="text-md rounded-[3px] p-1"
            key={language.name}
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </span>
        ))}
      </section>
      <section className="mt-10 text-center w-[500px]"></section>
      <section className="mt-10 text-center w-[500px]">
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {keyboard.map((key) => (
            <button
              key={key.ltr}
              className="w-12 h-12 rounded-md bg-[rgb(252,186,41)] text-[rgb(30,30,30)] font-semibold text-xl border border-[rgb(168,168,168)]"
            >
              {key.ltr}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
