import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'js/main.js',
  output: {
    file: 'public/bundle.js',
    name: 'WoIstMarkt',
    format: 'iife',
    sourcemap: !isProduction,
    globals: {
      jquery: '$',
      leaflet: 'L',
      moment: 'moment'
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    isProduction && terser()
  ]
};
