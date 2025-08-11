import type { Meta, StoryObj } from '@storybook/react';
import { ButtonClosedSecondary } from './ButtonClosedSecondary';

const meta: Meta<typeof ButtonClosedSecondary> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/ButtonClosedSecondary',
    component: ButtonClosedSecondary,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonClosedSecondary>;

export const Primary: Story = {
    args: {},
};
