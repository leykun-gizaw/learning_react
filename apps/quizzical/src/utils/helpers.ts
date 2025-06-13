import { Question } from '@learning-react/otdb_api';
import { TransformedQuestion } from './types';
import { nanoid } from 'nanoid';

export const transformQuestions = (
  questions: Question[]
): TransformedQuestion[] => {
  const transformed: TransformedQuestion[] = questions.map((question) => {
    const choicesTxt = [...question.incorrect_answers];
    choicesTxt.splice(
      Math.floor(Math.random() * question.incorrect_answers.length) + 1,
      0,
      question.correct_answer
    );
    return {
      id: nanoid(),
      category: question.category,
      type: question.type,
      difficulty: question.difficulty,
      question: question.question,
      choices: choicesTxt.map((choice) => ({
        id: nanoid(),
        text: choice,
        isCorrect: choice === question.correct_answer,
      })),
    };
  });
  return transformed;
};
