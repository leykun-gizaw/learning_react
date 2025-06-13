export default function Starter({
  handleStartQuiz,
}: {
  handleStartQuiz: () => void;
}) {
  return (
    <>
      <div>
        <h1 className="text-6xl text-center mb-3 text-[rgb(41,50,100)] font-normal">
          Quizzical
        </h1>
        <p className="text-center text-[rgb(41,50,100)]">
          Lets try some trivia questions
        </p>
      </div>
      <button
        className="text-xl text-[rgb(256,247,251)] py-4 px-6 rounded-md bg-[rgb(76,90,158)] hover:bg-[rgb(70,84,152)] active:bg-[rgb(76,90,158)] w-fit"
        onClick={handleStartQuiz}
      >
        Start Quiz
      </button>
    </>
  );
}
