import type { Meta, StoryObj } from '@storybook/react';
import { ContainerInfo } from './ContainerInfo';

const meta: Meta<typeof ContainerInfo> = {
    title: 'presentation/components/molecules/ContainerInfo',
    component: ContainerInfo,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContainerInfo>;

export const Primary: Story = {
    args: {},
};
