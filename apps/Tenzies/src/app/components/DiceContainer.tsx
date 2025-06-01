import Die from './Die';

const DiceContainer = () => {
  const generateAllNewDice = () => {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  };
  console.log('Generating new dice:', generateAllNewDice());
  return (
    <div className="dice-container grid grid-cols-5 grid-rows-2 w-9/12 h-40 gap-5">
      {Array.from({ length: 10 }, (_, index) => (
        <Die key={index} />
      ))}
    </div>
  );
};
export default DiceContainer;
