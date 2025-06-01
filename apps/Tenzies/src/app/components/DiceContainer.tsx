import { useState } from 'react';
import Die from './Die';

const DiceContainer = () => {
  const generateAllNewDice = () => {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  };
  const [diceValues, setDiceValues] = useState(() => generateAllNewDice());
  const DiceElements = diceValues.map((dieObj, index) => (
    <Die key={index} value={dieObj.value} />
  ));

  return (
    <div className="w-full m-auto h-full flex flex-col justify-evenly items-center">
      <div className="dice-container grid grid-cols-5 grid-rows-2 w-9/12 h-40 gap-5">
        {DiceElements}
      </div>
      <button
        onClick={() => setDiceValues(generateAllNewDice())}
        className="bg-[rgb(80,53,255)] text-white px-5 py-3 rounded text-xl font-bold"
      >
        Roll Dice
      </button>
    </div>
  );
};
export default DiceContainer;
