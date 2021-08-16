let path = require('path');
//去console插件
const TerserPlugin = require('terser-webpack-plugin');
//gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
//打包分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const cdnPlugin = require('webpack-cdn-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

//对一些不经常改动的库，可以通过cdn引入，webpack不对他们打包
let externals = {
  'ant-design-vue': 'antd',
  axios: 'axios',
  vue: 'Vue',
  'vue-router': 'VueRouter',
  'vue-i18n': 'VueI18n'
};

let cdnModules = [
  {
    name: 'axios',
    var: 'axios',
    path: 'axios.min.js'
  }, {
    name: 'vue',
    var: 'Vue',
    path: 'vue.global.prod.min.js'
  }, {
    name: 'vue-router',
    var: 'VueRouter',
    path: 'vue-router.global.prod.min.js'
  },
  {
    name: 'vue-i18n',
    var: 'VueI18n',
    path: 'vue-i18n.global.prod.min.js'
  },
  {
    name: 'ant-design-vue',
    var: 'antd',
    path: 'antd.min.js',
    style: 'antd.min.css'
  },
];

module.exports = {
  //基本路径
  publicPath: '/',
  //输出文件目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //生产环境不需要生产map文件
  productionSourceMap: false,
  chainWebpack: config => {
    //这里是对环境的配置，不同的环境对应不同的BASE_URL
    config.plugin('define').tap(args => {
      args[0]['process.env'].APP_URL = JSON.stringify(
        process.env.APP_URL
      );
      return args;
    });

    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');

    config.plugins.delete('prefetch');

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();

    //只在生产环境生效
    if (process.env.NODE_ENV === 'production') {
      config.externals(externals);
      config.optimization.minimize(true);
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          public: {
            name: 'public',
            test: resolve('src/components'),
            minSize: 0, //表示在压缩前的最小模块大小,默认值是 30kb
            minChunks: 2, // 最小公用次数
            priority: 5, // 优先级
            reuseExistingChunk: true // 公共模块必开启
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          }
        }
      });
    }
    //设置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api/api')) // 接口地址
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'));
  },
  //  webpack插件配置
  configureWebpack: config => {
    //生产环境插件
    let pluginsPro = [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: {
          source: false
        }
      }),
      new cdnPlugin({
        prodUrl: 'https://cdnjs.cloudflare.com/ajax/libs/:name/:version/:path',
        modules: cdnModules,
        publicPath: '/node_modules',
        optimize: true,
      }),
    ];

    if (process.env.NODE_ENV === 'production') {
      config.plugins = [...config.plugins, ...pluginsPro];
    }
  },
  devServer: {
    port: 8080, // 端口
    open: false, // 自动开启浏览器
    compress: false, // 开启压缩
    overlay: {
      warnings: true,
      errors: true,
    },
    hot: true,
    host: '0.0.0.0',
    https: false,
    hotOnly: false,
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'production',
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
