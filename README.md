webpack boilerplate ์๋๋ค! ๐ป
====

## ์๊ฐ

์ด ์ ์ฅ์๋ ๋ฐ๋๋ผ ์๋ฐ์คํฌ๋ฆฝํธ์ Express๋ฅผ ๊ธฐ๋ฐ์ผ๋ก Webpack์ ์ฌ์ฉํ  ๋ ๊ธฐ๋ณธ ์ค์ ์ ์๋ตํด์ฃผ๋ boilerplate์๋๋ค!

## ์ค์นํ  ๋ผ์ด๋ธ๋ฌ๋ฆฌ

์ค์นํ  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ Express + webpack + babel + SASS์๋๋ค. ์ด์ธ์๋ ๋ฐ๋ก ๊ฐ๋ฐ์ ํ  ์ ์๋๋ก ๋ณ๋์ ํ๋ฌ๊ทธ์ธ๋ค์ ์ค์นํ์ต๋๋ค.

### devDependencies

* "@babel/cli": "^7.15.4", => ES6+ ํธํ์ ์ํ babel
* "@babel/core": "^7.15.5",
* "@babel/preset-env": "^7.15.4",
* "babel-loader": "^8.2.2", => loader
* "css-loader": "^6.2.0",
* "sass-loader": "^12.1.0",
* "style-loader": "^3.2.1",
* "html-webpack-plugin": "^5.3.2", => htmlํ์ผ ์์ฑ ๋จ์ํ ํ๋ฌ๊ทธ์ธ
* "mini-css-extract-plugin": "^2.2.2", => css ํ์ผ ๋ถ๋ฆฌ๋ฅผ ์ํ ํ๋ฌ๊ทธ์ธ
* "node-sass": "^6.0.1",
* "nodemon": "^2.0.12",
* "webpack": "^5.52.0", => webpack ์ค์น
* "webpack-cli": "^4.8.0",
* "webpack-dev-middleware": "^5.0.0" 

### dependencies

* "@babel/polyfill": "^7.12.1", => ES6+ ์ถ๊ฐ ํธํ์ ์ํ babel/polyfill
* "express": "^4.17.1", => Express ๊ธฐ๋ณธ ์ค์ 
* "morgan": "^1.10.0",
* "path": "^0.12.7"