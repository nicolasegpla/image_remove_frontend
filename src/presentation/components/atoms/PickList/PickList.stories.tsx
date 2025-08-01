import type { Meta, StoryObj } from '@storybook/react';
import { PickList } from './PickList';

const meta: Meta<typeof PickList> = {
    title: 'presentation/components/atoms/PickList',
    component: PickList,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PickList>;

export const Primary: Story = {
    args: {},
};
