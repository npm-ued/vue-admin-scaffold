const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

let devServerConfig;
// 获取dev.server的自定义配置
const devServerConfigPath = path.resolve(resolve('./'), 'dev.server.js');
if (fs.existsSync(devServerConfigPath)) {
  try {
    devServerConfig = require(devServerConfigPath);
  } catch (e) {
    console.error(`Error loading dev.server.js`);
    throw e;
  }
}

// const pluginList = [
//   new CopyWebpackPlugin([
//     {
//       from: 'src/assets/libs',
//       to: 'libs/'
//     },
//     {
//       from: 'src/robots.txt',
//       to: 'robots.txt'
//     }], {
//     ignore: [],
//     copyUnmodified: true,
//     debug: 'debug'
//   })
// ];
module.exports = {
  runtimeCompiler: true,
  // publicPath: 'vueRouter',
  assetsDir: 'assets', // 修改静态资源路径
  productionSourceMap: true, // 生产环境开启source map
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@views', resolve('src/views'));
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      'window.Quill': 'quill/dist/quill.js',
      'Quill': 'quill/dist/quill.js'
    }]);
  },
  configureWebpack: { // 修改webpack配置（不建议直接修改 webpack 的配置）
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    // externals: isNotDevelopment ? {
    //   'vue': 'Vue',
    //   'view-design': 'iview',
    //   'vue-router': 'VueRouter'
    // } : {},
    // plugins: pluginList,
  },
  devServer: Object.assign({
    port: 8081,
    compress: true,
    disableHostCheck: true // That solved it
  }, devServerConfig)
};