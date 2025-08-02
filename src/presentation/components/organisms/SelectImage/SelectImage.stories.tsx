import type { Meta, StoryObj } from '@storybook/react';
import { SelectImage } from './SelectImage';

const meta: Meta<typeof SelectImage> = {
    title: 'presentation/components/organisms/SelectImage',
    component: SelectImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectImage>;

export const Primary: Story = {
    args: {},
};
