import type { Meta, StoryObj } from '@storybook/react';
import { LayoutLogin } from './LayoutLogin';

const meta: Meta<typeof LayoutLogin> = {
    title: 'presentation/layouts/LayoutLogin',
    component: LayoutLogin,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LayoutLogin>;

export const Primary: Story = {
    args: {},
};
