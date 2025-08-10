import type { Meta, StoryObj } from '@storybook/react';
import { ModuloDijeSelect } from './ModuloDijeSelect';

const meta: Meta<typeof ModuloDijeSelect> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/molecules/ModuloDijeSelect',
    component: ModuloDijeSelect,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModuloDijeSelect>;

export const Primary: Story = {
    args: {},
};
