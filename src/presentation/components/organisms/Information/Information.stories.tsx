import type { Meta, StoryObj } from '@storybook/react';
import { Information } from './Information';

const meta: Meta<typeof Information> = {
    title: 'presentation/components/organisms/Information',
    component: Information,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Information>;

export const Primary: Story = {
    args: {},
};
