import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTour } from './ButtonTour';

const meta: Meta<typeof ButtonTour> = {
    title: 'presentation/components/atoms/ButtonTour',
    component: ButtonTour,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonTour>;

export const Primary: Story = {
    args: {},
};
