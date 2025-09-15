import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// 导入 postcss 配置，而不是直接导入 tailwindcss
import postcssConfig from '../postcss.config.js';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: postcssConfig,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
});