import { Question } from '@learning-react/otdb_api';
import { TransformedQuestion } from './types';
import { nanoid } from 'nanoid';

export const transformQuestions = (
  questions: Question[]
): TransformedQuestion[] => {
  const transformed: TransformedQuestion[] = questions.map((question) => {
    const choicesTxt = question.incorrect_answers.map((incorrect_answer) => ({
      id: nanoid(),
      text: incorrect_answer,
      isChosen: false,
    }));
    const correct_answer_id = nanoid();
    const correct_answer = {
      id: correct_answer_id,
      text: question.correct_answer,
      isChosen: false,
    };
    choicesTxt.splice(
      Math.floor(Math.random() * question.incorrect_answers.length) + 1,
      0,
      correct_answer
    );
    return {
      id: nanoid(),
      category: question.category,
      type: question.type,
      difficulty: question.difficulty,
      question: question.question,
      correct_answer_id: correct_answer_id,
      choices: choicesTxt,
    };
  });
  return transformed;
};
