import type { Meta, StoryObj } from '@storybook/react';
import { ContainerLogo } from './ContainerLogo';

const meta: Meta<typeof ContainerLogo> = {
    title: 'presentation/components/atoms/ContainerLogo',
    component: ContainerLogo,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContainerLogo>;

export const Primary: Story = {
    args: {},
};
