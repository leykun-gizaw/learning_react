import { useState } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';

const DiceContainer = () => {
  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  function handleDieClick(id: string) {
    setDiceValues((prevDice) =>
      prevDice.map((die) =>
        id === die.id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }
  function handleDiceRole() {
    if (gameWon) {
      setDiceValues(generateAllNewDice());
      return;
    }
    setDiceValues((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  }
  const [diceValues, setDiceValues] = useState(() => generateAllNewDice());

  const DiceElements = diceValues.map((dieObj, index) => (
    <Die key={dieObj.id} {...dieObj} handleDieClick={handleDieClick} />
  ));
  const gameWon = diceValues.every(
    (die) => die.isHeld && die.value === diceValues[0].value
  );

  return (
    <div className="w-full m-auto h-full flex flex-col justify-evenly items-center">
      {gameWon && <ReactConfetti />}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl font-extrabold">Tenzies</h1>
        <p className="text-center font-semibold">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice-container grid grid-cols-5 grid-rows-2 w-9/12 h-40 gap-5">
        {DiceElements}
      </div>
      <button
        onClick={handleDiceRole}
        className="bg-[rgb(80,53,255)] text-white px-5 py-3 rounded text-xl font-bold"
      >
        {gameWon ? 'New Game' : 'Roll Dice'}
      </button>
    </div>
  );
};
export default DiceContainer;
