import { decode } from 'html-entities';
import { TransformedQuestion } from '../utils/types';

export default function QuestionsList({
  questions,
}: {
  questions: TransformedQuestion[];
}) {
  const createChoicesList = (question: TransformedQuestion) => {
    // Combine correct and incorrect answers, shuffle them, and return as a list
    return question.choices.map((choice, index) => {
      return (
        <li key={index}>
          <input
            type="radio"
            name={question.question}
            id={choice.id}
            className="hidden peer"
          />
          <label
            htmlFor={choice.id}
            className="block cursor-pointer border border-[rgb(41,50,100)] peer-checked:bg-[rgb(214,219,245)] p-1 rounded-lg hover:bg-[rgb(214,219,245)]"
          >
            <span className="peer-checked:text-white">
              {decode(choice.text, { level: 'html5' })}
            </span>
          </label>
        </li>
      );
    });
  };

  return (
    <ul className="text-[rgb(41,50,100)] mt-10">
      {questions.map((question, index: number) => (
        <div key={index}>
          <li className="mb-4">
            <h2 className="text-xl font-semibold">
              {decode(question.question, { level: 'html5' })}
            </h2>
            <ul className="mt-2 flex flex-wrap gap-3">
              {createChoicesList(question)}
            </ul>
          </li>
          <hr className="border-[rgb(220,222,240)] my-4" />
        </div>
      ))}
    </ul>
  );
}
