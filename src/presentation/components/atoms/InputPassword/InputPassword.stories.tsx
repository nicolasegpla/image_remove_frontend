import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from './InputPassword';

const meta: Meta<typeof InputPassword> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/InputPassword',
    component: InputPassword,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Primary: Story = {
    args: {},
};
