import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';

const meta: Meta<typeof Login> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/organisms/Login',
    component: Login,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Primary: Story = {
    args: {},
};
