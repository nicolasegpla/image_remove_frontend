import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/molecules/NavBar',
    component: NavBar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
    args: {},
};
