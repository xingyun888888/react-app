## 列表内容
- react
- redux
- react-redux
- react-router
- webpack @2.x
- antd-mobile
- scss

## 使用
``` bash
$ git clone https://github.com/RubinCalm/react-app.git
$ cd react-app
$ npm install
```
-  开发环境
``` javascript
// open webpack.config.js
devServer:{
  host: '192.168.0.107',  // your ip address,
  contentBase: './build',
  historyApiFallback: true,
  inline: true,
  port: 8800,
},
```
``` bash
$ npm start
```  
- 生产环境
``` bash
$ npm run build
```
## 说明
- 代码分割、按需加载
