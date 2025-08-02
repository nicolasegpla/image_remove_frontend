import type { Meta, StoryObj } from '@storybook/react';
import { FormSelectImage } from './FormSelectImage';

const meta: Meta<typeof FormSelectImage> = {
    title: 'presentation/components/molecules/FormSelectImage',
    component: FormSelectImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormSelectImage>;

export const Primary: Story = {
    args: {},
};
