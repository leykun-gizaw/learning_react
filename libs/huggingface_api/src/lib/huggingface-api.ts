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
    return null; // Handle the case where no ingredients are provided
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
      return null; // Handle the case where no response is received
    }
    const recipe = response.choices[0].message.content;
    if (!recipe) {
      console.error('No recipe generated');
      return null; // Handle the case where no recipe is generated
    }
    return recipe; // Return the generated recipe
  } catch (error) {
    console.error('Error generating recipe:', error);
    // Handle the error, e.g., return a default message or null
    return null;
  }
}
