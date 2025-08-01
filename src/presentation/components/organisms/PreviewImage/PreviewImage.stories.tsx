import type { Meta, StoryObj } from '@storybook/react';
import { PreviewImage } from './PreviewImage';

const meta: Meta<typeof PreviewImage> = {
    title: 'presentation/components/organisms/PreviewImage',
    component: PreviewImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PreviewImage>;

export const Primary: Story = {
    args: {},
};
