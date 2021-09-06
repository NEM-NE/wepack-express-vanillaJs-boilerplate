webpack boilerplate 입니다! 💻
====

## 소개

이 저장소는 바닐라 자바스크립트와 Express를 기반으로 Webpack을 사용할 때 기본 설정을 생략해주는 boilerplate입니다!

## 설치할 라이브러리

설치할 라이브러리는 Express + webpack + babel + SASS입니다. 이외에도 바로 개발을 할 수 있도록 별도의 플러그인들을 설치했습니다.

### devDependencies

* "@babel/cli": "^7.15.4", => ES6+ 호환을 위한 babel
* "@babel/core": "^7.15.5",
* "@babel/preset-env": "^7.15.4",
* "babel-loader": "^8.2.2", => loader
* "css-loader": "^6.2.0",
* "sass-loader": "^12.1.0",
* "style-loader": "^3.2.1",
* "html-webpack-plugin": "^5.3.2", => html파일 생성 단순화 플러그인
* "mini-css-extract-plugin": "^2.2.2", => css 파일 분리를 위한 플러그인
* "node-sass": "^6.0.1",
* "nodemon": "^2.0.12",
* "webpack": "^5.52.0", => webpack 설치
* "webpack-cli": "^4.8.0",
* "webpack-dev-middleware": "^5.0.0" 

### dependencies

* "@babel/polyfill": "^7.12.1", => ES6+ 추가 호환을 위한 babel/polyfill
* "express": "^4.17.1", => Express 기본 설정
* "morgan": "^1.10.0",
* "path": "^0.12.7"