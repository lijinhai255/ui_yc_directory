import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 读取 package.json
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');
export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/*.stories.tsx', '**/*.test.tsx', 'node_modules'],
      },
    }),
    postcss({
      plugins: [
        tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
        autoprefixer(),
      ],
      extract: path.resolve('dist/styles.css'),
      minimize: true,
      sourceMap: true,
      modules: false,
    }),
    terser(),
  ],
};