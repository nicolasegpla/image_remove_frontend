import type { Meta, StoryObj } from '@storybook/react';
import { ContainerImageEditor } from './ContainerImageEditor';

const meta: Meta<typeof ContainerImageEditor> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/molecules/ContainerImageEditor',
    component: ContainerImageEditor,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContainerImageEditor>;

export const Primary: Story = {
    args: {},
};
