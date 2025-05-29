import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe({ recipe }: { recipe: string }) {
  return (
    <section id="recipe_text">
      <ReactMarkdown>{recipe}</ReactMarkdown>,
    </section>
  );
}
