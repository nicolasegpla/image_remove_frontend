import type { Meta, StoryObj } from '@storybook/react';
import { BUttonClosed } from './BUttonClosed';

const meta: Meta<typeof BUttonClosed> = {
    title: 'presentation/components/atoms/BUttonClosed',
    component: BUttonClosed,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BUttonClosed>;

export const Primary: Story = {
    args: {},
};
