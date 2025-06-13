import { OTDBResponse } from './types.js';

export async function fetchQuestions(): Promise<OTDBResponse> {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=5&type=multiple'
  );
  return (await response.json()) as OTDBResponse;
}
