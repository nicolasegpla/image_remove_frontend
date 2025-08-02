import type { Meta, StoryObj } from '@storybook/react';
import { PreviewTransform } from './PreviewTransform';

const meta: Meta<typeof PreviewTransform> = {
    title: 'presentation/components/atoms/PreviewTransform',
    component: PreviewTransform,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PreviewTransform>;

export const Primary: Story = {
    args: {},
};
