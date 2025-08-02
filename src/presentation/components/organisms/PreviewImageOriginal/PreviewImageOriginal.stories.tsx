import type { Meta, StoryObj } from '@storybook/react';
import { PreviewImageOriginal } from './PreviewImageOriginal';

const meta: Meta<typeof PreviewImageOriginal> = {
    title: 'presentation/components/organisms/PreviewImageOriginal',
    component: PreviewImageOriginal,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PreviewImageOriginal>;

export const Primary: Story = {
    args: {},
};
