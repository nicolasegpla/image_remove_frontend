import type { Meta, StoryObj } from '@storybook/react';
import { ButtonMini } from './ButtonMini';

const meta: Meta<typeof ButtonMini> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/ButtonMini',
    component: ButtonMini,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonMini>;

export const Primary: Story = {
    args: {},
};
