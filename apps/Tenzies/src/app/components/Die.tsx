const Die = ({
  id,
  value,
  isHeld,
  handleDieClick,
}: {
  id: string;
  value: number;
  isHeld: boolean;
  handleDieClick: (id: string) => void;
}) => {
  const dieStyles =
    'die border border-slate-300 rounded-md shadow-[0px_2px_2px_rgba(0,0,0,0.25)] active:shadow-none';
  return (
    <button
      className={dieStyles + (isHeld ? ' bg-[#59E391]' : ' bg-white')}
      onClick={() => handleDieClick(id)}
    >
      <span className="font-bold text-2xl">{value}</span>
    </button>
  );
};
export default Die;
