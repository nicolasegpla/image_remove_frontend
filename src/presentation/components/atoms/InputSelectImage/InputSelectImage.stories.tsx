import type { Meta, StoryObj } from '@storybook/react';
import { InputSelectImage } from './InputSelectImage';

const meta: Meta<typeof InputSelectImage> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/InputSelectImage',
    component: InputSelectImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputSelectImage>;

export const Primary: Story = {
    args: {},
};
