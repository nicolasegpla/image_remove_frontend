import type { Meta, StoryObj } from '@storybook/react';
import { NavCloserModals } from './NavCloserModals';

const meta: Meta<typeof NavCloserModals> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/molecules/NavCloserModals',
    component: NavCloserModals,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavCloserModals>;

export const Primary: Story = {
    args: {},
};
