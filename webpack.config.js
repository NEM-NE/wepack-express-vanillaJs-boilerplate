const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // enntry file
  entry: {
      index : ['@babel/polyfill', './src/js/main.js', './src/css/index.scss'],
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './js/[name]_bundle.js',
    publicPath: "http://localhost:3000/public" //웹팩 미들웨어 장소
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: './css/style.css' }),
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html',
        chunks:['index']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",   // translates CSS into CommonJS
            "sass-loader"   // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};