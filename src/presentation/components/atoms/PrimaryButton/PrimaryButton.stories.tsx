import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/PrimaryButton',
    component: PrimaryButton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
    args: {},
};
