// Rollup Config

import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import strip from 'rollup-plugin-strip';

/** Short Circut Evaluation used to process NODE_ENV variables set to 'production'.
  *
  * Further reading:
  *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation
  */

export default {
  entry: 'src/assets/js/app.js',
  dest: 'dist/assets/js/app.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    (process.env.NODE_ENV === 'production' && strip({ debugger: true })),
    eslint({
      exclude: ['src/assets/scss/**']
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
