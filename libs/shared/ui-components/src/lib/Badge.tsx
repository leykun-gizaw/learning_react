import clsx from 'clsx';

const colorAssociation = {
  gray: 'bg-[#F3F4F6] text-[#1F2937]',
  red: 'bg-[#FEE2E2] text-[#991B1B]',
  yellow: 'bg-[#FEF3C7] text-[#92400E]',
  green: 'bg-[#D1FAE5] text-[#065F46]',
  blue: 'bg-[#DBEAFE] text-[#1E40AF]',
  indigo: 'bg-[#E0E7FF] text-[#3730A3]',
  purple: 'bg-[#EDE9FE] text-[#5B21B6]',
  pink: 'bg-[#FCE7F3] text-[#9D174D]',
};

type BadgePropTypes = {
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
};

export function Badge({ type, color, content }: BadgePropTypes) {
  const badgeClasses = clsx(
    type === 'pill' ? 'rounded-full' : 'rounded-lg',
    colorAssociation[color],
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
