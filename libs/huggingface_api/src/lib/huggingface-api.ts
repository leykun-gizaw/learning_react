import { InferenceClient } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;
export async function getRecipeFromIngredients(
  ingredients: string[],
  accessToken: string
): Promise<string | null> {
  const client = new InferenceClient(accessToken);

  if (!ingredients || ingredients.length === 0) {
    console.error('No ingredients provided');
    return 'Please provide some ingredients to get a recipe.'; // User-friendly message
  }

  const userPrompt = `Here are the ingredients I have: ${ingredients.join(
    ', '
  )}. What can I make?`;

  try {
    const response = await client.chatCompletion({
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 1024,
    });

    if (!response || !response.choices || response.choices.length === 0) {
      console.error('No response from the model');
      return 'Sorry, the model could not generate a recipe at this time.'; // User-friendly message
    }

    const recipe = response.choices[0].message.content;
    if (!recipe) {
      console.error('No recipe generated');
      return 'Sorry, no recipe could be generated with the provided ingredients.'; // User-friendly message
    }

    return recipe; // Return the generated recipe
  } catch (error) {
    if (error instanceof Error && error.message.includes('exceeded')) {
      return error.message.slice(1, -1);
    }
    console.error('An error occurred:', error);
    return 'An unexpected error occurred. Please try again later.'; // Generic error message
  }
}
