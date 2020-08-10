# vue项目代码规范配置

## Why unify?

在团队开发中，统一代码规范是非常重要的，如果在项目开发的过程中，每个人按照自己的规范来发开功能，最后的代码看起来就会很糟糕。

## How configure

下面我们就来一起看看具体的配置：

#### 1、配置过程中需要的依赖
* @vue/cli-plugin-eslint
* @vue/eslint-config-prettier
* babel-eslint
* eslint
* eslint-plugin-babel
* eslint-plugin-prettier
* eslint-plugin-vue
* husky
* lint-staged
* prettier
* stylelint
* stylelint-config-recess-order 
* stylelint-config-standard
* stylelint-prettier
* stylelint-scss

备注：现在创建项目基本都是基于vue-cli3.x(ESLint + Prettite)，上面有部分依赖在创建项目的时候会默认安装，可忽略。

#### 2、VSCode 编辑器配置

2.1、安装以下插件
* eslint
* stylelint
* Prettier - Code formatter

2.2、在vscode的setting文件里面添加以下代码(在编辑器中按住Ctrl + Shift + P，然后输入settings)：
```js
"eslint.enable":true,
"eslint.options": {
  "extensions":[
    ".js",
    ".vue",
    ".ts",
    ".tsx"
  ]
 },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "css.validate": true,
  "scss.validate": true,
  "less.validate": true,
  "editor.codeActionsOnSave": {
     "source.fixAll": true
  },
```
