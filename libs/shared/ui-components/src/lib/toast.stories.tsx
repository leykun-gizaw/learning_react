import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './toast';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Toast',
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary = {
  args: {
    type: '',
  },
};

export const Heading: Story = {
  args: {
    type: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Toast!/gi)).toBeTruthy();
  },
};
