import { languages } from '../utils/constants';

export function App() {
  return (
    <div className="bg-[rgb(40,39,38)] h-screen text-white flex flex-col items-center">
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
            className="text-md rounded-md p-1"
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
    </div>
  );
}

export default App;
