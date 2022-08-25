import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

const config = {
  input: 'index.js',
  output: { dir: 'dist' },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.svg'],
    }),
    svgr({
      babel: false,
    }),
  ],
};

export default config;
