const path = require('path')
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // testEnvironment: 'jsdom',
  collectCoverage: true, // 收集测试时的覆盖率信息
  coverageDirectory: path.resolve(__dirname, './coverage'), // 指定输出覆盖信息文件的目录
  roots: ['<rootDir>/'],
  collectCoverageFrom: [ // 指定收集覆盖率的目录文件，只收集每个包的src目录，不收集打包后的dist目录
    '**/src/**',
    '!**/dist/**'
  ],
  // testURL: 'https://www.shuidichou.com/jd', // 设置jsdom环境的URL
  testMatch: [ // 测试文件匹配规则
    '**/__tests__/**/*.test.js'
  ],
  moduleFileExtensions: [
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ],
  transform: {
    // // 用 `vue-jest` 处理 `*.vue` 文件
    // ".*\\.(vue)$": "vue-jest",
    // // 用 `babel-jest` 处理 js
    // ".*\\.(js)$": "babel-jest" 

    '^.+\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
  },
  testPathIgnorePatterns: [ // 忽略测试路径
    // '/node_modules/'
    "node_modules/(?!(@vue/test-utils｜vue-jest)/)"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['node_modules/(?!(@vue/test-utils｜vue-jest)/)'],
  coverageThreshold: { // 配置测试最低阈值
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
