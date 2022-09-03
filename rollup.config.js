import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

const config = {
  input: 'index.js',
  output: { dir: 'dist' },
  plugins: [
    svgr({
      babel: false,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.svg'],
    }),
  ],
};

export default config;
