import type { Meta, StoryObj } from '@storybook/react';
import { SelectModel } from './SelectModel';

const meta: Meta<typeof SelectModel> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/SelectModel',
    component: SelectModel,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectModel>;

export const Primary: Story = {
    args: {},
};
