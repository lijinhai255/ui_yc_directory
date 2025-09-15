import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: '新功能',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '标签',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: '成功',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: '错误',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: '警告',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: '信息',
    variant: 'info',
  },
};

export const Rounded: Story = {
  args: {
    children: '圆形',
    variant: 'primary',
    rounded: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Badge {...args} size="sm">小</Badge>
      <Badge {...args} size="md">中</Badge>
      <Badge {...args} size="lg">大</Badge>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <span className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        热门
      </span>
    ),
    variant: 'danger',
  },
};