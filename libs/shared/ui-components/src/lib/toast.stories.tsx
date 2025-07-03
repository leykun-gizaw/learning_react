import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta = {
  component: Toast,
  title: 'Toast',
  argTypes: {
    type: ['success', 'information', 'warning', 'error'],
  },
} satisfies Meta<typeof Toast>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ToastStory: Story = {
  args: {
    type: 'success',
  },
};
