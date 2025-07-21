import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLogOut } from './ButtonLogOut';

const meta: Meta<typeof ButtonLogOut> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/ButtonLogOut',
    component: ButtonLogOut,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonLogOut>;

export const Primary: Story = {
    args: {},
};
