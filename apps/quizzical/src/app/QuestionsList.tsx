import { decode } from 'html-entities';
import { TransformedQuestion } from '../utils/types';
import { useState } from 'react';
import clsx from 'clsx';

export default function QuestionsList({
  questions,
  handleChoose,
}: {
  questions: TransformedQuestion[];
  handleChoose: (answers: [string, string][]) => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  const createChoicesList = (question: TransformedQuestion) => {
    // Combine correct and incorrect answers, shuffle them, and return as a list
    return question.choices.map((choice, index) => {
      return (
        <li key={index}>
          <input
            type="radio"
            name={question.id}
            id={choice.id}
            className="hidden peer"
            value={choice.id}
            // checked={choice.chosen}
          />
          <label
            htmlFor={choice.id}
            className={
              'block cursor-pointer border border-[rgb(41,50,100)] peer-checked:bg-[rgb(214,219,245)] p-1 rounded-lg hover:bg-[rgb(214,219,245)]' +
              clsx({
                'bg-[rgb(148,215,162)]':
                  submitted && choice.chosen && choice.isCorrect,
                'bg-[rgb(255,204,204)]':
                  submitted && choice.chosen && !choice.isCorrect,
              })
            }
          >
            <span className="peer-checked:text-white">
              {decode(choice.text, { level: 'html5' })}
            </span>
          </label>
        </li>
      );
    });
  };
  const submitAnswers = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleChoose(Array.from(new FormData(event.currentTarget).entries()));
  };

  return (
    <form onSubmit={submitAnswers} className="flex flex-col items-center gap-5">
      <ul className="text-[rgb(41,50,100)] mt-10">
        {questions.map((question) => (
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
        ))}
      </ul>
      <button className="text-xl text-[rgb(256,247,251)] p-2 rounded-md bg-[rgb(76,90,158)] hover:bg-[rgb(70,84,152)] active:bg-[rgb(76,90,158)] w-fit">
        {true ? 'Check Answers' : 'Play Again'}
      </button>
    </form>
  );
}
