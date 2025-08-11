import type { Meta, StoryObj } from '@storybook/react';
import { LayoutEditImage } from './LayoutEditImage';

const meta: Meta<typeof LayoutEditImage> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/layouts/LayoutEditImage',
    component: LayoutEditImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LayoutEditImage>;

export const Primary: Story = {
    args: {},
};
