import { resolve } from 'path';

const config = {
  // 修改为正确的故事文件路径
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    // 移除未安装的插件
    // '@storybook/addon-designs',
    // '@storybook/addon-mdx-gfm',
    // 'storybook-css-modules',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      // 移除 viteConfigPath 引用，直接在这里配置 Vite
    },
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;