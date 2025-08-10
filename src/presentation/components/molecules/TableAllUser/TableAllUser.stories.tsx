import type { Meta, StoryObj } from '@storybook/react';
import { TableAllUser } from './TableAllUser';

const meta: Meta<typeof TableAllUser> = {
    title: '/home/nicolasgpla/image_remove_frontend/src/presentation/components/molecules/TableAllUser',
    component: TableAllUser,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableAllUser>;

export const Primary: Story = {
    args: {},
};
