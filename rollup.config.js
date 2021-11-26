import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.esm.js',
      format: 'es',
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'num2Cn',
    },
  ],
  plugins: [
    terser(),
    commonjs(),
    typescript()
  ]
};
