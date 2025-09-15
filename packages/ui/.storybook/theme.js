import { create } from '@storybook/theming/create';

export default create({
    // 基础设置
    base: 'dark',

    // 品牌设置
    brandTitle: 'Namefi',
    brandUrl: 'http://etherjs.webthree.cyou/',
    brandImage: 'logo.png',
    brandTarget: '_self',

    // 颜色
    colorPrimary: '#48E59B',
    colorSecondary: '#21a668',

    // UI
    appBg: '#111111',
    appContentBg: '#1A1A1A',
    appPreviewBg: '#1A1A1A',
    appBorderColor: '#0A4429',
    appBorderRadius: 24,

    // 文本颜色
    textColor: '#ddede6',
    textInverseColor: '#111111',

    // 表单颜色
    inputBg: '#1A1A1A',
    inputBorder: '#0A4429',
    inputTextColor: '#ddede6',

    // 工具栏颜色
    barTextColor: '#ddede6',
    barSelectedColor: '#48E59B',
    barBg: '#111111',
});