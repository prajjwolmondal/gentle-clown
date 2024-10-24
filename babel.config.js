module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'], // This is here to get smaller bundle size. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library. 
      },
    },
  };
};
