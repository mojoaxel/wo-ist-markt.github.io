import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import cssbundle from 'rollup-plugin-css-bundle';
import { terser } from 'rollup-plugin-terser';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'js/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: !isProduction,
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    cssbundle(),
    isProduction && terser()
  ]
};
