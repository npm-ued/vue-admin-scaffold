const mock = require('./__mocks__'); // mock服务

module.exports = {
  port: 8088,
  compress: true,
  disableHostCheck: true, // That solved it
  before: (app) => {
    mock(app);
  },
  public: 'www.baidu.com:80', // 通过webpack-dev-server默认打开浏览器的地址
  proxy: {
    '/api': {
      target: 'https://api.baidu.com', // 后端的地址替换即可
      pathRewrite: { '^/api': '' }
    }
  }
};
