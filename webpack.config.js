const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = (opt) => {
  return {
    mode: 'production',
    entry: path.resolve(opt.path, './index.js'),
    output: {
      path: path.resolve(opt.path, './dist'),
      filename: `${opt.name}.min.js`,
      library: opt.name,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: opt.externals,
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [path.resolve(opt.path, './src')],
          options: {
            // 指定babel配置文件
            configFile: path.resolve(__dirname, 'babel.config.js')
          }
        },
        {
            test: /.vue$/,
            use: {
                loader: 'vue-loader'
            }
        },
        {test: /\.(eot|woff|ttf)$/, loader: "file-loader" },
        {
            test: /\.sass$/,
            use: ['style', 'css', 'sass']
        },
        {
            test: /\.css$/, // 解析 css
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.ts$/, // 解析 ts
            loader: "ts-loader",
            options: {
                configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                appendTsSuffixTo: [/\.vue$/]
            },
        }
      ]
    },
    optimization: {
      minimize: true
    }
  }
}
