import React from 'react';
import { TransformedQuestion } from '../utils/types';
import Question from './Question';

export default function QuestionsList({
  questions,
  submitted,
  setSubmitted,
  handleChoose,
  handlePlay,
}: {
  questions: TransformedQuestion[];
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  handleChoose: (question_id: string, choice_id: string) => void;
  handlePlay: () => void;
}) {
  const submitAnswers = (e: React.FormEvent) => {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formEl);
    console.log(formData);
  };
  const correctAnswersCount = questions.reduce((acc, curQuestion) => {
    return curQuestion.correct_answer_id === curQuestion.user_answer_id
      ? acc + 1
      : acc;
  }, 0);
  const generateActionButton = (value: string, handler: () => void) => {
    return (
      <button
        className="
            text-xl text-[rgb(256,247,251)] 
            p-2 rounded-md bg-[rgb(76,90,158)] 
            hover:bg-[rgb(70,84,152)] active:bg-[rgb(76,90,158)] w-fit
          "
        onClick={handler}
      >
        {value}
      </button>
    );
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
      <div className="flex items-center gap-4">
        {submitted && (
          <p className="text-xl text-[rgb(41,50,100)]">
            You Scored {correctAnswersCount}/5 answers
          </p>
        )}
        {submitted
          ? generateActionButton('Play Again', handlePlay)
          : generateActionButton('Check Answers', () => setSubmitted(true))}
      </div>
    </form>
  );
}
