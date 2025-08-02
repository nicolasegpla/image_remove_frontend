import type { Meta, StoryObj } from '@storybook/react';
import { FormLogin } from './FormLogin';

const meta: Meta<typeof FormLogin> = {
    title: 'presentation/components/molecules/FormLogin',
    component: FormLogin,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormLogin>;

export const Primary: Story = {
    args: {},
};
