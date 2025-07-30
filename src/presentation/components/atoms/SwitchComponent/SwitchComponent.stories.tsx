import type { Meta, StoryObj } from '@storybook/react';
import { switchComponent } from './SwitchComponent';

const meta: Meta<typeof switchComponent> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/switchComponent',
    component: switchComponent,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof switchComponent>;

export const Primary: Story = {
    args: {},
};
