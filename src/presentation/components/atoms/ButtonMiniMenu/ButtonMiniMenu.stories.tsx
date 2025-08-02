import type { Meta, StoryObj } from '@storybook/react';
import { ButtonMiniMenu } from './ButtonMiniMenu';

const meta: Meta<typeof ButtonMiniMenu> = {
    title: 'presentation/components/atoms/ButtonMiniMenu',
    component: ButtonMiniMenu,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonMiniMenu>;

export const Primary: Story = {
    args: {},
};
