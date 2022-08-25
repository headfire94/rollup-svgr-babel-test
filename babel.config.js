module.exports = (api) => {
  api.cache(true);
  
  const plugins = [];
  const presets = [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ];
  return {
    plugins,
    presets,
  };
};
