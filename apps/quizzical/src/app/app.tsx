import React from 'react';
import Starter from './Starter';
import { fetchQuestions, Question } from '@learning-react/otdb_api';
import QuestionsList from './QuestionsList';

export function App() {
  const [questions, setQuestions] = React.useState<Question[] | null>(null);

  const handleStartQuiz = async () => {
    const response = await fetchQuestions();
    setQuestions(response.results);
  };

  return (
    <div className="bg-[rgb(246,247,251)] max-w-[90rem] p-10 flex flex-col justify-center items-center gap-10">
      {questions === null ? (
        <Starter handleStartQuiz={handleStartQuiz} />
      ) : (
        <QuestionsList questions={questions} />
      )}
    </div>
  );
}

export default App;
