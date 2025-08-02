import type { Meta, StoryObj } from '@storybook/react';
import { CollapsibleMenu } from './CollapsibleMenu';

const meta: Meta<typeof CollapsibleMenu> = {
    title: 'presentation/components/atoms/CollapsibleMenu',
    component: CollapsibleMenu,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CollapsibleMenu>;

export const Primary: Story = {
    args: {},
};
