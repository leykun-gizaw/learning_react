import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe({ recipe }: { recipe: string }) {
  return (
    <section id="recipe_text " className="text-[rgb(72,84,103)]">
      <h2 className="text-2xl font-semibold my-4 text-black">
        Recipe from Chef Claude
      </h2>
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => <p className="mb-2" {...props} />,
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside ml-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal ml-8" {...props} />
          ),
        }}
      >
        {recipe}
      </ReactMarkdown>
    </section>
  );
}
