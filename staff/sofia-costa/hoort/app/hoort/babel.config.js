module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          'utils': '../../utils',
          'errors': '../../errors',
          'data': '../../data',
        },
      },
    ],
  ]
};
