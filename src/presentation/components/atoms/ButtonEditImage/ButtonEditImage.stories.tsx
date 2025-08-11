import type { Meta, StoryObj } from '@storybook/react';
import { ButtonEditImage } from './ButtonEditImage';

const meta: Meta<typeof ButtonEditImage> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/ButtonEditImage',
    component: ButtonEditImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonEditImage>;

export const Primary: Story = {
    args: {},
};
