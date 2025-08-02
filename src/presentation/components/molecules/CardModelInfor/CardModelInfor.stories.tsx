import type { Meta, StoryObj } from '@storybook/react';
import { CardModelInfor } from './CardModelInfor';

const meta: Meta<typeof CardModelInfor> = {
    title: 'presentation/components/molecules/CardModelInfor',
    component: CardModelInfor,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardModelInfor>;

export const Primary: Story = {
    args: {},
};
