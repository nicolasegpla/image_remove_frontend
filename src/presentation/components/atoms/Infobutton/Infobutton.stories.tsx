import type { Meta, StoryObj } from '@storybook/react';
import { Infobutton } from './Infobutton';

const meta: Meta<typeof Infobutton> = {
    title: 'presentation/components/atoms/Infobutton',
    component: Infobutton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Infobutton>;

export const Primary: Story = {
    args: {},
};
