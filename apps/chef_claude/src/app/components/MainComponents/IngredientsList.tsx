export default function IngredientsList({
  ingredients,
  showRecipes,
  isLoading,
}: {
  ingredients: string[];
  showRecipes: () => void;
  isLoading: boolean;
}) {
  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  return (
    <section className="text-[rgb(72,84,103)]">
      <h2 className="text-2xl text-black font-semibold">
        Ingredients at hand:
      </h2>
      <ul className="list-disc mx-8">{ingredientListItems}</ul>

      {ingredients.length > 3 && (
        <div className="mt-4 p-4 bg-[rgb(240,238,234)]  rounded-lg flex justify-between items-center">
          <div>
            <h3 className="mb-2 text-xl font-medium">Ready for a recipe?</h3>
            <p className="text-gray-500 text-sm">
              Generate a recipe from the list of ingredients
            </p>
          </div>
          <button
            disabled={isLoading}
            onClick={showRecipes}
            className="bg-[rgb(209,117,86)] rounded-md px-3 py-2 text-white hover:bg-[rgb(190,100,70)] transition-colors duration-200 active:bg-[rgb(209,117,86)] disabled:bg-gray-400 disabled:cursor-not-allowed flex gap-3 items-center"
          >
            {isLoading ? (
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v4l3.5-3.5L12 20v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
            ) : null}{' '}
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
