import type { Meta, StoryObj } from '@storybook/react';
import { PreviewTransform } from './PreviewTransform';

const meta: Meta<typeof PreviewTransform> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/PreviewTransform',
    component: PreviewTransform,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PreviewTransform>;

export const Primary: Story = {
    args: {},
};
