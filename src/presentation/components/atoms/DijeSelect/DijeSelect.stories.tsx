import type { Meta, StoryObj } from '@storybook/react';
import { DijeSelect } from './DijeSelect';

const meta: Meta<typeof DijeSelect> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/DijeSelect',
    component: DijeSelect,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DijeSelect>;

export const Primary: Story = {
    args: {},
};
