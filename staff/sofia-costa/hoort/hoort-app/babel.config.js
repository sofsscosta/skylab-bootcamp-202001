module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          'utils': '../hoort-utils',
          'errors': '../hoort-errors',
          'data': '../hoort-data',
        },
      },
    ],
  ]
};
