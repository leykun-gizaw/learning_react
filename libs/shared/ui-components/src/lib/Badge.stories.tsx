import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta = {
  component: Badge,
  title: 'Badge',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['square', 'pill'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'gray',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
      ],
    },
  },
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BadgeStory: Story = {
  args: {
    type: 'square',
    color: 'gray',
    content: 'Badge',
  },
};
