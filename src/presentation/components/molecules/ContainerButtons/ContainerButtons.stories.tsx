import type { Meta, StoryObj } from '@storybook/react';
import { ContainerButtons } from './ContainerButtons';

const meta: Meta<typeof ContainerButtons> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/molecules/ContainerButtons',
    component: ContainerButtons,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContainerButtons>;

export const Primary: Story = {
    args: {},
};
