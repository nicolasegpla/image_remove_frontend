import type { Meta, StoryObj } from '@storybook/react';
import { LayoutAdmin } from './LayoutAdmin';

const meta: Meta<typeof LayoutAdmin> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/layouts/LayoutAdmin',
    component: LayoutAdmin,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LayoutAdmin>;

export const Primary: Story = {
    args: {},
};
