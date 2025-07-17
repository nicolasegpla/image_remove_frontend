import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';

const meta: Meta<typeof InputText> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/InputText',
    component: InputText,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Primary: Story = {
    args: {},
};
