import type { Meta, StoryObj } from '@storybook/react';
import { LayoutLogin } from './LayoutLogin';

const meta: Meta<typeof LayoutLogin> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/layouts/LayoutLogin',
    component: LayoutLogin,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LayoutLogin>;

export const Primary: Story = {
    args: {},
};
