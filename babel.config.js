module.exports = (api) => {
  api.cache(true);
  
  const plugins = [
    '@babel/plugin-proposal-export-default-from',
  ];
  const presets = [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ];
  return {
    plugins,
    presets,
  };
};
