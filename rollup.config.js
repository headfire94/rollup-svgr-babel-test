import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';

const config = {
  input: 'index.js',
  output: { dir: 'dist' },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js'],
    }),
    svgr({
      babel: false,
      svgoConfig: {},
    }),
  ],
};

export default config;
