import type { Meta, StoryObj } from '@storybook/react';
import { FormPreview } from './FormPreview';

const meta: Meta<typeof FormPreview> = {
    title: 'presentation/components/molecules/FormPreview',
    component: FormPreview,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormPreview>;

export const Primary: Story = {
    args: {},
};
