import { useState } from 'react';
import IngredientsList from './MainComponents/IngredientsList';
import ClaudeRecipe from './MainComponents/ClaudeRecipe';
import { getRecipeFromIngredients } from '@learning-react/huggingface_api';

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState('');

  const handleSubmit = (formData: FormData) => {
    const ingredient = formData.get('ingredient');

    ingredient !== '' &&
      setIngredients((prev) => [...prev, ingredient as string]);
  };

  const getRecipe = async () => {
    const recipe = await getRecipeFromIngredients(
      ingredients,
      import.meta.env.VITE_HF_ACCESS_TOKEN
    );
    if (recipe) {
      setRecipe(recipe);
    } else {
      setRecipe("Sorry, I couldn't find a recipe with those ingredients.");
    }
  };

  return (
    <main className="flex flex-col justify-center max-w-screen-md w-11/12 mx-auto">
      <form action={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          name="ingredient"
          className="border border-gray-300 p-2 rounded-lg w-3/4"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-lg w-1/4 hover:bg-gray-800 transition-colors duration-200 p-2 active:bg-black disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          + Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} showRecipes={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
