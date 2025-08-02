import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';

const meta: Meta<typeof Login> = {
    title: 'presentation/components/organisms/Login',
    component: Login,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Primary: Story = {
    args: {},
};
