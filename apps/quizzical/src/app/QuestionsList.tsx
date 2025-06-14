import React from 'react';
import { TransformedQuestion } from '../utils/types';
import Question from './Question';

export default function QuestionsList({
  questions,
  handleChoose,
}: {
  questions: TransformedQuestion[];
  handleChoose: (question_id: string, choice_id: string) => void;
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const submitAnswers = (e: React.FormEvent) => {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formEl);
    console.log(formData);
  };

  return (
    <form onSubmit={submitAnswers} className="flex flex-col items-center gap-5">
      <ul className="text-[rgb(41,50,100)] mt-10">
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            handleChoose={handleChoose}
            submitted={submitted}
          />
        ))}
      </ul>
      <button
        className="text-xl text-[rgb(256,247,251)] p-2 rounded-md bg-[rgb(76,90,158)] hover:bg-[rgb(70,84,152)] active:bg-[rgb(76,90,158)] w-fit"
        onClick={() => setSubmitted(true)}
      >
        Check Answers
      </button>
    </form>
  );
}
