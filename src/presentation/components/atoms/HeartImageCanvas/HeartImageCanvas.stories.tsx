import type { Meta, StoryObj } from '@storybook/react';
import { HeartImageCanvas } from './HeartImageCanvas';

const meta: Meta<typeof HeartImageCanvas> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/HeartImageCanvas',
    component: HeartImageCanvas,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeartImageCanvas>;

export const Primary: Story = {
    args: {},
};
