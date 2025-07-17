import type { Meta, StoryObj } from '@storybook/react';
import { FormLogin } from './FormLogin';

const meta: Meta<typeof FormLogin> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/molecules/FormLogin',
    component: FormLogin,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormLogin>;

export const Primary: Story = {
    args: {},
};
