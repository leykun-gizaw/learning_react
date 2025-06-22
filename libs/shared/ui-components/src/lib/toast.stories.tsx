import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta = {
  component: Toast,
  title: 'Toast',
} satisfies Meta<typeof Toast>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
  },
};

export const Information: Story = {
  args: {
    type: 'information',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
};
