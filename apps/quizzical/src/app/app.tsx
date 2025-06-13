import React from 'react';
import Starter from './Starter';
import { fetchQuestions } from '@learning-react/otdb_api';
import QuestionsList from './QuestionsList';
import { transformQuestions } from '../utils/helpers';
import { Choice, TransformedQuestion } from '../utils/types';

export function App() {
  const [questions, setQuestions] = React.useState<
    TransformedQuestion[] | null
  >(null);

  const handleStartQuiz = async () => {
    const response = await fetchQuestions();
    setQuestions(transformQuestions(response.results));
  };
  const handleChoose = (answerList: string[][]) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions: TransformedQuestion[] = [];

      answerList.forEach((answer) => {
        prevQuestions?.forEach((question) => {
          const choices = [...question.choices];
          if (answer[0] === question.id) {
            choices.forEach((choice) => {
              if (answer[1] === choice.id) choice.chosen = true;
            });
          }
          updatedQuestions.push({ ...question, choices });
        });
      });
      return updatedQuestions;
    });
  };

  return (
    <div className="bg-[rgb(246,247,251)] max-w-[55rem] py-10 px-20 flex flex-col justify-center items-center gap-10">
      {questions === null ? (
        <Starter handleStartQuiz={handleStartQuiz} />
      ) : (
        <QuestionsList questions={questions} handleChoose={handleChoose} />
      )}
    </div>
  );
}

export default App;
