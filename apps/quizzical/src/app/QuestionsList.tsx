import { Question } from '@learning-react/otdb_api';

export default function QuestionsList({
  questions,
}: {
  questions: Question[];
}) {
  const createChoicesList = (question: Question) => {
    // Combine correct and incorrect answers, shuffle them, and return as a list
    const choicesList = [...question.incorrect_answers];
    choicesList.splice(
      Math.floor(Math.random() * question.incorrect_answers.length) + 1,
      0,
      question.correct_answer
    );
    return choicesList.map((choice, index) => {
      return (
        <li key={index}>
          <input
            type="radio"
            name={question.question}
            id={choice}
            className="hidden peer"
          />
          <label
            htmlFor={choice}
            className="block cursor-pointer border border-[rgb(41,50,100)] peer-checked:bg-[rgb(214,219,245)] p-1 rounded-lg hover:bg-[rgb(214,219,245)]"
          >
            <span className="peer-checked:text-white">{choice}</span>
          </label>
        </li>
      );
    });
  };

  return (
    <ul className="w-3/4 text-[rgb(41,50,100)] mt-10">
      {questions.map((question, index: number) => (
        <>
          <li key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{question.question}</h2>
            <ul className="mt-2 flex flex-wrap gap-3">
              {createChoicesList(question)}
            </ul>
          </li>
          <hr className="border-[rgb(220,222,240)] my-4" />
        </>
      ))}
    </ul>
  );
}
