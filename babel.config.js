module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
