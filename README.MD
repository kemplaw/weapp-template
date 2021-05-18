# weapp-template

Weapp dev template

### How to use

`git clone https://github.com/kemplaw/weapp-template.git my-project`



```
│  .eslintrc.js
│  .gitignore
│  app.js
│  app.json
│  app.wxss
│  config.js                    # 项目配置 
│  package.json                 
│  prettier.config.js           
│  project.config.json          # 微信项目配置
│  README.MD
│  sitemap.json
│  yarn.lock
│
├─api                           # api
│      login.js
│
├─components                    # 公共组件
│  ├─base-image                 # 图片组件    
│  ├─base-modal                 # popup组件
│  ├─base-picker                # picker组件
│  ├─base-radio-group           # radio group 选择器
│  └─base-table                 # 表格组件
│
├─layout                        # 容器组件
│      .gitignore
│
├─pages                         # 业务页面
├─styles
│      custom-theme.wxss        # 自定义样式
│      utils.wxss
│
└─utils
        options.js              # 枚举配置生成
        regex.js                # 正则
        request.js              # 请求封装
        storage.js              # 离线存储
        Store.js                # 简易状态管理
        tabbar.js               # tabbar 状态管理
        types.js                # 枚举类型
        upload.js               # 上传封装
        util.js                 
        validator.js            # 表单验证封装
```


### Use Validator 

```javascript
// page/validator.config.js


export const rules = {
        username: {
                required: true,
                message: 'name required'
        }
}

```

```javascript
// page/some-page/index.js

const validator = new Schema(ruls)

// will validate the form value

import { validate } from './utils/validator.js'

validateForm() {
  validate(formValue, validator).then(({valid, errors}) => {
        //   do something
  })
}

```


### Use Store

```javascript
// init store with initial state
const store = Store.getStore({ username: 'foo' })

// mutation state
store.mutation('username', 'bar')
```
