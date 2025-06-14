export interface TransformedQuestion {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  user_answer_id: string | null;
  correct_answer_id: string;
  choices: Choice[];
}

export type Choice = {
  id: string;
  text: string;
  isChosen: boolean;
};
