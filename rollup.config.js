const path = require('path');

const babel = require('rollup-plugin-babel');
const alias = require('rollup-plugin-alias');
const resolve = require('rollup-plugin-node-resolve');
const external = require('rollup-plugin-peer-deps-external');
const cjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const postcss = require('rollup-plugin-postcss');

module.exports = [
  {
    input: './src/index.js',
    output: {
      file: './dist/index.js',
      format: 'esm',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      alias({
        resolve: ['.js', '/index.js'],
        entries: {
          components: path.resolve(__dirname, './src/components'),
          utils: path.resolve(__dirname, './src/utils'),
        },
      }),
      cjs(),
      json(),
      resolve(),
      external(),
      postcss(),
    ],
  },
];
