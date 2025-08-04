import type { Meta, StoryObj } from '@storybook/react';
import { LogoImage } from './LogoImage';

const meta: Meta<typeof LogoImage> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/LogoImage',
    component: LogoImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LogoImage>;

export const Primary: Story = {
    args: {},
};
