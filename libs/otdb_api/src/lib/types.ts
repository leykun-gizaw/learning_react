export interface OTDBResponse {
  response_code: number;
  results: Question[];
}
export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
