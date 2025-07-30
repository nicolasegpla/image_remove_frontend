import type { Meta, StoryObj } from '@storybook/react';
import { SwitchComponent } from './SwitchComponent';

const meta: Meta<typeof SwitchComponent> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/atoms/switchComponent',
    component: SwitchComponent,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SwitchComponent>;

export const Primary: Story = {
    args: {},
};
