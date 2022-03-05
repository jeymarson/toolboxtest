module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@config': './src/config',
          '@services': './src/services',
        },
      },
    ],
  ],
};
