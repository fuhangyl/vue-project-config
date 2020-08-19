# vue项目代码规范配置

## Why unify?

在团队开发中，统一代码规范是非常重要的，如果在项目开发的过程中，每个人按照自己的规范来发开功能，最后的代码看起来就会很糟糕。

## How configure?

下面我们就来一起看看具体的配置：

#### 1、配置过程中需要的依赖
* @commitlint/cli
* @commitlint/config-conventional
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

备注：现在创建项目基本都是基于vue-cli3.x(ESLint + Prettite)，上面有部分依赖在创建项目的时候会默认安装，可忽略。

#### 2、VSCode 编辑器配置

2.1、安装以下插件
* eslint
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

配置完之后，在package.json的script里面添加命令

```js
"eslint": "vue-cli-service lint"
```

这个时候执行npm run lint就可以对代码进行格式化，当然vscode也会在你保存文件的时候校验一次

#### 4、配置husky

当我们将eslint配置完成之后，vscode会自动根据配置的校验规则格式化代码，但是也避免不了其他同事没有配置编辑器或者使用了其他的编辑器进行项目开发，如果将未校验的代码提交到仓库里面，将导致所有人的代码由于校验规则不匹配而报错，这时候就需要使用husky在提交代码时候进行校验。

当我们在git提交代码时候，会触发一系列hook钩子函数，而husky就是一个Git hooks工具。lint-staged是一个在git暂存文件上运行linters的工具,为什么要用这个工具呢，因为我们在提交代码的时候，只需要对已经修改过的文件进行校验，不然检查所有文件，比较浪费时间。那我们该怎么配置呢？

首先新建.commitlintrc.js文件，添加如下代码

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 新功能（feature）
        'feat',
        // 修补bug
        'fix',
        // 文档（documentation）
        'docs',
        // 格式（不影响代码运行的变动）
        'style',
        // 重构（即不是新增功能，也不是修改bug的代码变动）
        'refactor',
        // 增加测试
        'test',
        // 回滚
        'revert',
        // 构建过程或辅助工具的变动
        'config',
        // 其他改动
        'chore'
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
```

然后在package.json文件末尾添加以下代码

```js
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
"lint-staged": {
  "*.{js,vue}": [
    "vue-cli-service lint",
    "git add -A"
  ]
}
```

这时候你如果执行git commit -m '提交描述'的时候，会发现提交之前会调用eslint与进行代码格式化，这个时候提交到仓库的代码就统一风格了。

以上就是统一代码规范的一些的配置，后续也会不断的完善这套配置。



