import clsx from 'clsx';

export function Badge({
  type,
  color,
  content,
}: {
  type: 'square' | 'pill';
  color:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';
  content: string;
}) {
  const colorAssociation = {
    gray: { bg: 'bg-[#F3F4F6]', txt: 'text-[#1F2937]' },
    red: { bg: 'bg-[#FEE2E2]', txt: 'text-[#991B1B]' },
    yellow: { bg: 'bg-[#FEF3C7]', txt: 'text-[#92400E]' },
    green: { bg: 'bg-[#D1FAE5]', txt: 'text-[#065F46]' },
    blue: { bg: 'bg-[#DBEAFE]', txt: 'text-[#1E40AF]' },
    indigo: { bg: 'bg-[#E0E7FF]', txt: 'text-[#3730A3]' },
    purple: { bg: 'bg-[#EDE9FE]', txt: 'text-[#5B21B6]' },
    pink: { bg: 'bg-[#FCE7F3]', txt: 'text-[#9D174D]' },
  };
  const badgeClasses = clsx(
    type === 'pill' ? 'rounded-full' : 'rounded-lg',
    colorAssociation[color].bg,
    colorAssociation[color].txt,
    'w-fit',
    'py-1',
    'px-3'
  );
  return (
    <div className={badgeClasses}>
      <span>{content}</span>
    </div>
  );
}

export default Badge;
