export interface TransformedQuestion {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer_id: string;
  choices: Choice[];
}

export type Choice = {
  id: string;
  text: string;
  isChosen: boolean;
};
