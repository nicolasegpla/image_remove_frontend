import type { Meta, StoryObj } from '@storybook/react';
import { CounterTokens } from './CounterTokens';

const meta: Meta<typeof CounterTokens> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/CounterTokens',
    component: CounterTokens,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CounterTokens>;

export const Primary: Story = {
    args: {},
};
