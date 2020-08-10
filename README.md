# vue项目代码规范配置

## Why unify?

在团队开发中，统一代码规范是非常重要的，如果在项目开发的过程中，每个人按照自己的规范来发开功能，最后的代码看起来就会很糟糕。

## How configure?

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

#### 3、配置eslint

在项目的根目录下面新建 .eslintrc.js与.eslintignore文件

然后在.eslintrc.js文件内添加以下内容

```js
module.exports = {
  root: true,
  globals: {
    process: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  plugins: ['babel', 'prettier'],
  rules:{ 
    // ESLint校验规则
  }
}
```

在.eslintignore文件中添加以下代码(不需要检测的文件)：

```js
.DS_Store
node_modules
/dist

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

这个时候执行npm run lint就可以对代码进行格式化，当然vscode也会在你保存文件的时候校验一次

#### 4、配置stylelint

在项目根目录下面新建.stylelintrc.js与.stylelintignore文件

然后在.stylelintrc.js文件内添加以下内容

```js
module.exports = {
  extends: ["stylelint-config-standard","stylelint-config-recess-order"],
  "plugins": [
    "stylelint-scss"
  ],
  rules: {
    // stylelint校验规
  }
}
```

在.stylelintignore中添加同.eslintignore文件中的代码

配置完之后，在package.json的script里面添加命令

```js
"stylelint": "stylelint src/**/*.{html,vue,css,sass,scss} --fix",
```

当我们执行npm run stylelint就可以对样式进行格式化，当然vscode也会在你保存文件的时候校验一次
