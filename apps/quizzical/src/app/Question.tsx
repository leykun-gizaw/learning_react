import { TransformedQuestion } from '../utils/types';
import { decode } from 'html-entities';
import clsx from 'clsx';

export default function Question({
  question,
  handleChoose,
  submitted,
}: {
  question: TransformedQuestion;
  handleChoose: (question_id: string, choice_id: string) => void;
  submitted: boolean;
}) {
  const createChoicesList = (question: TransformedQuestion) => {
    return question.choices.map((choice, index) => {
      return (
        <li key={index}>
          <input
            type="radio"
            name={question.id}
            id={choice.id}
            className="hidden peer"
            value={choice.id}
            checked={choice.isChosen}
            onChange={() => handleChoose(question.id, choice.id)}
            disabled={submitted}
          />
          <label
            htmlFor={choice.id}
            className={clsx(
              'block cursor-pointer border border-[rgb(41,50,100)] py-1 px-4 rounded-xl hover:bg-[rgb(214,219,245)]',
              'peer-checked:bg-[rgb(214,219,245)] peer-checked:border-none',
              {
                'bg-[rgb(148,215,162)] peer-checked:bg-[rgb(148,215,162)]':
                  submitted && choice.id === question.correct_answer_id,
                'peer-checked:bg-[rgb(255,204,204)]':
                  submitted &&
                  choice.isChosen &&
                  choice.id !== question.correct_answer_id,
                'opacity-30 cursor-not-allowed': submitted && !choice.isChosen,
                'peer-checked:border-[rgb(41,50,100)]':
                  submitted && choice.isChosen,
              }
            )}
          >
            <span className={clsx({ 'peer-checked:text-white': true })}>
              {decode(choice.text, { level: 'html5' })}
            </span>
          </label>
        </li>
      );
    });
  };

  return (
    <div key={question.id}>
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
  );
}
