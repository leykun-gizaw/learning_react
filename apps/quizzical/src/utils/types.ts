export interface TransformedQuestion {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  choices: Choice[];
}

type Choice = {
  id: string;
  text: string;
  isCorrect: boolean;
};
