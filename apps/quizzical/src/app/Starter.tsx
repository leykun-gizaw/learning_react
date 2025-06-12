export default function Starter() {
  return (
    <div className="bg-[rgb(246,247,251)] m-10 mx-auto p-10 w-3/4 h-[800px] relative flex flex-col justify-center items-center gap-10">
      <div>
        <h1 className="text-6xl text-center mb-3 text-[rgb(41,50,100)] font-normal">
          Quizzical
        </h1>
        <p className="text-center text-[rgb(41,50,100)]">
          Lets try some trivia questions
        </p>
      </div>
      <button className="text-xl text-[rgb(256,247,251)] py-4 px-6 rounded-md bg-[rgb(76,90,158)] hover:bg-[rgb(70,84,152)] active:bg-[rgb(76,90,158)] w-fit">
        Start Quiz
      </button>
    </div>
  );
}
