module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: ['js', 'ts', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/unit/mock/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/unit/mock/fileMock.js'
  },
  collectCoverageFrom: [
    '**/src/**/**.{ts,js,vue}',
    '!**/node_modules/**',
    '!**src/main.ts**',
    '!**src/devtools.ts**',
    '!**src/shims-vue.d.ts**',
    '!**src/router/**',
    '!**src/config/**',
    '!**src/assets/libs/**'
  ]
};
