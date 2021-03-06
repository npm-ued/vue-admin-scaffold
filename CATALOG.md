### 目录结构
- __mocks__ 数据模拟
- public 
  - favicon.ico ico文件
  - index.html html模板文件
- src 源码
  - api 模块化API
  - assets 静态文件 
    - css 样式文件
    - image 图片文件
    - js js 文件
  - components 组件
    - custom-card 自定义card
    - custom-form 自定义form
    - custom-list 自定义list
    - layout 布局
      - aside-menu 左侧导航
      - header-bar 页面头部
        - breadcrumbList.vue 面包屑导航
        - header-bar.ts 头部相关类型声明
        - header-bar.vue 页面头部
    - index.ts 公共组件导出
  - i18n 国际化
    - en-US 美式英文
    - zh-CN 简体中文
    - index.ts 国际化导出文件
  - plugins 插件
    - elements.ts element plus 插件
    - global-components.ts 全局自定义组件插件
  - request 网络请求封装
    - getrequest.ts api模块化封装
    - server.ts axios拦截器相关封装
  - router 路由
    - modules 模块
    - index.ts 路由导出
  - store 全局store
    - index.ts 
  - views 页面
    - login 登录页面
    - user 用户页面
  - App.vue 入口页面
  - devtools.ts dev tool 调试
  - main.ts 入口文件
  - shims-vue.d.ts 全局声明文件
- tests 测试目录
- .browserslistrc 
- .eslintignore eslint的忽略文件
- .eslintrc.js eslint 的配置文件
- .gitignore git忽略文件
- babel.config.js babel的配置文件
- CATALOG.md 目录结构文档
- jest.config.js jest测试配置文件
- package-lock.json 包版本锁定文件
- package.json 项目配置文件
- README.md 项目文档
- todo-list.md todolist
- tsconfig.json typescript 配置文件
- vue.config.js vue-cli的相关配置文件