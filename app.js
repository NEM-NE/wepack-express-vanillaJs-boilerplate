const express = require("express");
const app = express();

const IndexRouter = require('./routes');

//webpack 미들웨어 사용
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}))

//포트번호 3000
app.set("port", 3000);

//bundle된 index.html '/' 주소로 요청
app.get('/', IndexRouter);

app.listen(app.get("port"), () => {
  console.log("http://localhost:" + app.get("port"));
});