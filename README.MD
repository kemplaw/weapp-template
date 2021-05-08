# weapp-template

Weapp dev template

### How to use

`git clone https://github.com/kemplaw/weapp-template.git my-project`



```
│  .gitignore
│  app.js
│  app.json
│  app.wxss
│  .eslintrc  # eslint 配置文件 / eslint config file
│  config.js  # 项目配置文件 / project config file
│  package.json  # 项目依赖 / deps
│  prettier.config.js  格式化配置 / prettier
│  README.MD
│
├─api  # 接口 / logic api
│      login.js
│
├─components  # 公共组件 / your common components
│      index.js
│
├─pages  # 业务组件 / your pages
│  ├─index
│  │
│  └─logs
│
└─utils  # 工具类
        request.js  # ajax 封装
        util.js  
```