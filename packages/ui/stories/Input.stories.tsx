import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '请输入...',
  },
};

export const WithLabel: Story = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名',
  },
};

export const WithHelpText: Story = {
  args: {
    label: '密码',
    type: 'password',
    placeholder: '请输入密码',
    helpText: '密码长度至少为8位，需包含字母和数字',
  },
};

export const WithError: Story = {
  args: {
    label: '电子邮箱',
    type: 'email',
    placeholder: 'example@example.com',
    error: '请输入有效的电子邮箱地址',
  },
};

export const WithPrefix: Story = {
  args: {
    label: '搜索',
    placeholder: '搜索内容...',
    prefix: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
};

export const WithSuffix: Story = {
  args: {
    label: '价格',
    type: 'number',
    placeholder: '0.00',
    suffix: (
      <span className="text-secondary-500">¥</span>
    ),
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input {...args} size="sm" placeholder="小尺寸输入框" />
      <Input {...args} size="md" placeholder="中尺寸输入框" />
      <Input {...args} size="lg" placeholder="大尺寸输入框" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: '禁用状态',
    placeholder: '此输入框已禁用',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: '全宽输入框',
    placeholder: '此输入框会占据整个容器宽度',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};