export default function IngredientsList({
  ingredients,
  showRecipes,
}: {
  ingredients: string[];
  showRecipes: () => void;
}) {
  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index} className="p-2">
      {ingredient}
    </li>
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
            onClick={showRecipes}
            className="bg-[rgb(209,117,86)] rounded-md px-5 py-2 text-white hover:bg-[rgb(190,100,70)] transition-colors duration-200 active:bg-[rgb(209,117,86)] disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
