import React from 'react';
import Starter from './Starter';
import { fetchQuestions } from '@learning-react/otdb_api';
import QuestionsList from './QuestionsList';
import { transformQuestions } from '../utils/helpers';
import { TransformedQuestion } from '../utils/types';

export function App() {
  const [questions, setQuestions] = React.useState<TransformedQuestion[]>([]);
  const [submitted, setSubmitted] = React.useState(false);

  const handleStartQuiz = async () => {
    const response = await fetchQuestions();
    setQuestions(transformQuestions(response.results));
  };
  const handlePlay = async () => {
    await handleStartQuiz();
    setSubmitted(false);
  };

  const handleChoose = (question_id: string, choice_id: string) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map(
        (prevQuestion) =>
          JSON.parse(JSON.stringify(prevQuestion)) as TransformedQuestion
      );
      const questionIndex = updatedQuestions.findIndex(
        (question) => question.id === question_id
      );
      updatedQuestions[questionIndex].choices.forEach((choice) => {
        if (choice.id === choice_id) choice.isChosen = true;
        else choice.isChosen = false;
      });
      updatedQuestions[questionIndex].user_answer_id = choice_id;
      return updatedQuestions;
    });
  };

  return (
    <div className="bg-[rgb(246,247,251)] max-w-[55rem] py-10 px-20 flex flex-col justify-center items-center gap-10">
      {questions.length === 0 ? (
        <Starter handleStartQuiz={handleStartQuiz} />
      ) : (
        <QuestionsList
          questions={questions}
          submitted={submitted}
          setSubmitted={setSubmitted}
          handleChoose={handleChoose}
          handlePlay={handlePlay}
        />
      )}
    </div>
  );
}

export default App;
