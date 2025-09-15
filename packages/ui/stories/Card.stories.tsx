import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components/Card';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: '卡片标题',
    children: (
      <p className="text-secondary-700">这是一个简单的卡片内容示例，您可以在这里放置任何内容。</p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: '带有底部的卡片',
    children: (
      <p className="text-secondary-700">这个卡片包含底部操作区域，通常用于放置按钮或其他操作元素。</p>
    ),
    footer: (
      <div className="flex justify-end space-x-2">
        <Button variant="outline" size="sm">取消</Button>
        <Button variant="primary" size="sm">确认</Button>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    children: (
      <p className="text-secondary-700">这是一个没有标题的卡片示例，只包含内容部分。</p>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    title: '长内容卡片',
    children: (
      <div className="space-y-4">
        <p className="text-secondary-700">这是一个包含较长内容的卡片示例。</p>
        <p className="text-secondary-700">您可以在卡片中放置任意数量的内容，卡片会自动调整高度以适应内容。</p>
        <p className="text-secondary-700">这对于展示详细信息、文章摘要或其他需要更多空间的内容非常有用。</p>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <span className="text-sm text-secondary-500">最后更新: 2025-09-14</span>
        <Button variant="primary" size="sm">查看更多</Button>
      </div>
    ),
  },
};

export const DifferentShadows: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Card {...args} shadow="none" title="无阴影">
        <p className="text-secondary-700">这是一个没有阴影的卡片示例。</p>
      </Card>
      <Card {...args} shadow="sm" title="小阴影">
        <p className="text-secondary-700">这是一个小阴影的卡片示例。</p>
      </Card>
      <Card {...args} shadow="md" title="中阴影">
        <p className="text-secondary-700">这是一个中阴影的卡片示例。</p>
      </Card>
      <Card {...args} shadow="lg" title="大阴影">
        <p className="text-secondary-700">这是一个大阴影的卡片示例。</p>
      </Card>
    </div>
  ),
};