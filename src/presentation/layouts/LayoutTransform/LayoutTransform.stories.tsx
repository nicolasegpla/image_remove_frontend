import type { Meta, StoryObj } from '@storybook/react';
import { LayoutTransform } from './LayoutTransform';

const meta: Meta<typeof LayoutTransform> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/layouts/LayoutTransform',
    component: LayoutTransform,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LayoutTransform>;

export const Primary: Story = {
    args: {},
};
