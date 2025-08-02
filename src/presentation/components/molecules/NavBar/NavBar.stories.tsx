import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'presentation/components/molecules/NavBar',
    component: NavBar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
    args: {},
};
