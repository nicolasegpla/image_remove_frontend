import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryContainerContentLayout } from './PrimaryContainerContentLayout';

const meta: Meta<typeof PrimaryContainerContentLayout> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/layouts/PrimaryContainerContentLayout',
    component: PrimaryContainerContentLayout,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PrimaryContainerContentLayout>;

export const Primary: Story = {
    args: {},
};
