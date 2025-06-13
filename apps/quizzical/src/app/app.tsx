import React from 'react';
import Starter from './Starter';
import { fetchQuestions, Question } from '@learning-react/otdb_api';
import QuestionsList from './QuestionsList';
import { transformQuestions } from '../utils/helpers';
import { TransformedQuestion } from '../utils/types';

export function App() {
  const [questions, setQuestions] = React.useState<
    TransformedQuestion[] | null
  >(null);

  const handleStartQuiz = async () => {
    const response = await fetchQuestions();
    console.log(transformQuestions(response.results));
    setQuestions(transformQuestions(response.results));
  };

  return (
    <div className="bg-[rgb(246,247,251)] max-w-[55rem] py-10 px-20 flex flex-col justify-center items-center gap-10">
      {questions === null ? (
        <Starter handleStartQuiz={handleStartQuiz} />
      ) : (
        <QuestionsList questions={questions} />
      )}
      {questions !== null && (
        <button className="text-xl text-[rgb(256,247,251)] p-2 rounded-md bg-[rgb(76,90,158)] hover:bg-[rgb(70,84,152)] active:bg-[rgb(76,90,158)] w-fit">
          {true ? 'Check Answers' : 'Play Again'}
        </button>
      )}
    </div>
  );
}

export default App;
