import babel from '@rollup/plugin-babel';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/eruda-outline-plugin.js',
    format: 'umd',
    name: 'erudaOutlinePlugin'
  },
  plugins: [babel({ babelHelpers: 'bundled' })],
}
